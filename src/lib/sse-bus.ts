import { EventEmitter } from "events";
const bus = new EventEmitter();
export type MatchUpdate = { matchId: number; home: number; away: number; when: string };
export function publish(update: MatchUpdate) { bus.emit("score", update); }
export function subscribe(onData: (u: MatchUpdate)=>void) {
  const handler = (u: MatchUpdate) => onData(u);
  bus.on("score", handler);
  return () => bus.off("score", handler);
}
export default bus;
