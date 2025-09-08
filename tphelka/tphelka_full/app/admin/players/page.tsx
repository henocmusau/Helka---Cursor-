export default async function AdminPlayers(){
  const list = [{ id:1, first_name:'Jean', last_name:'Mukena', position:'Attaquant', jersey_number:9 }];
  async function add(form: FormData){
    'use server';
    // Insert into DB
  }
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <form action={add} className="space-y-3">
        <h2 className="font-semibold">Ajouter un joueur</h2>
        <input name="first_name" className="input" placeholder="Prénom" required />
        <input name="last_name" className="input" placeholder="Nom" required />
        <input name="position" className="input" placeholder="Poste" required />
        <input name="jersey_number" type="number" className="input" placeholder="Numéro" />
        <button className="rounded-2xl bg-brand px-5 py-2 text-white">Ajouter</button>
      </form>

      <ul className="space-y-2">
        {list.map(p => <li key={p.id} className="rounded-xl border p-3">#{p.jersey_number} {p.first_name} {p.last_name} — {p.position}</li>)}
      </ul>
    </div>
  );
}
