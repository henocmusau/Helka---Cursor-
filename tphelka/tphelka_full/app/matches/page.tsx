"use client";
import { useEffect, useState } from 'react';

type Live = { matchId: number; home: number; away: number; when: string };

export default function MatchesPage(){
  const [updates, setUpdates] = useState<Live[]>([]);
  useEffect(()=>{
    const es = new EventSource('/api/events');
    es.onmessage = (e) => {
      try { setUpdates(u=>[JSON.parse(e.data), ...u]); } catch {}
    };
    return ()=> es.close();
  }, []);
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Calendrier & Direct</h1>
      <ul className="space-y-2" aria-live="polite">
        {updates.map((u,i)=> (<li key={i} className="rounded-xl border p-3">Match #{u.matchId} — {u.home}:{u.away} <span className="text-sm text-gray-500">({u.when})</span></li>))}
      </ul>
    </div>
  );
}
