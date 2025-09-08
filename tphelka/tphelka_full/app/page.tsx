import LiveBadge from '@/components/live-badge';
import NewsCard from '@/components/news-card';
import MatchCard from '@/components/match-card';

export default async function HomePage(){
  // This is a placeholder server component; real data comes from DB
  const nextMatch = { id: 1, opponent: 'AS Local', is_home: true, date: new Date().toISOString(), location: 'Stade de Kinshasa', competition: 'Ligue' };
  const latestNews = [{ id:1, title: 'Victoire!', content: 'TP Helka gagne 2-0', cover_image_url: null }];
  return (
    <div className="space-y-8">
      <section className="flex items-center justify-between">
        <h1 className="text-3xl font-extrabold">TP Helka – Kinshasa</h1>
        <LiveBadge />
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">Prochain match</h2>
        <MatchCard match={nextMatch} result={null} />
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">Actualités</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {latestNews.map(n => <NewsCard key={n.id} news={n} />)}
        </div>
      </section>
    </div>
  );
}
