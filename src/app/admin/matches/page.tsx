import { publish } from '@/lib/sse-bus';

export default async function AdminMatches(){
  const list = [{ id:1, opponent:'AS Local' }];
  async function create(form: FormData){
    'use server';
    // create match
  }
  async function updateScore(form: FormData){
    'use server';
    const matchId = Number(form.get('match_id'));
    const home = Number(form.get('home'));
    const away = Number(form.get('away'));
    // update DB and publish
    publish({ matchId, home, away, when: new Date().toLocaleTimeString() });
  }
  return (
    <div className="space-y-8">
      <form action={create} className="grid gap-2 sm:grid-cols-2">
        <h2 className="sm:col-span-2 font-semibold">Créer un match</h2>
        <input name="opponent" className="input" placeholder="Adversaire" required />
        <label className="flex items-center gap-2"><input type="checkbox" name="is_home" /> À domicile</label>
        <input name="date" type="datetime-local" className="input" required />
        <input name="location" className="input" placeholder="Lieu" />
        <input name="competition" className="input" placeholder="Compétition" />
        <button className="rounded-2xl bg-brand px-5 py-2 text-white">Créer</button>
      </form>

      <div>
        <h2 className="font-semibold mb-3">Mettre à jour le score</h2>
        <form action={updateScore} className="grid gap-2 sm:grid-cols-4">
          <select name="match_id" className="input">
            {list.map(m => <option key={m.id} value={m.id}>#{m.id} vs {m.opponent}</option>)}
          </select>
          <input name="home" type="number" className="input" placeholder="Helka" />
          <input name="away" type="number" className="input" placeholder="Adversaire" />
          <button className="rounded-2xl bg-brand px-5 py-2 text-white">Publier</button>
        </form>
      </div>
    </div>
  );
}
