import PlayerCard from '@/components/player-card';

export default async function TeamPage(){
  const roster = [
    { id:1, first_name:'Jean', last_name:'Mukena', position:'Attaquant', jersey_number:9, photo_url: null },
    { id:2, first_name:'Paul', last_name:'Mbuyi', position:'Gardien', jersey_number:1, photo_url: null },
  ];
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Effectif — Équipe première</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {roster.map(p => <PlayerCard key={p.id} player={p} />)}
      </div>
    </div>
  );
}
