export default function PlayerCard({ player }: any){
  return (
    <article className="rounded-xl border p-4">
      <img src={player.photo_url ?? '/avatar.png'} alt={`${player.first_name} ${player.last_name}`} className="w-full h-40 object-cover rounded-lg" loading="lazy" />
      <h3 className="mt-2 font-semibold">#{player.jersey_number ?? '—'} {player.first_name} {player.last_name}</h3>
      <p className="text-sm text-gray-600">{player.position}</p>
    </article>
  );
}
