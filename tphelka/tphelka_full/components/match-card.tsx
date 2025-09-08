export default function MatchCard({ match, result }: any){
  return (
    <div className="rounded-xl border p-4 flex items-center justify-between">
      <div>
        <div className="font-semibold">TP Helka vs {match.opponent}</div>
        <div className="text-sm text-gray-600">{new Date(match.date).toLocaleString()}</div>
        <div className="text-sm">{match.location} · {match.competition}</div>
      </div>
      <div className="text-2xl font-bold">
        {result ? `${result.home_score} : ${result.away_score}` : '— : —'}
      </div>
    </div>
  );
}
