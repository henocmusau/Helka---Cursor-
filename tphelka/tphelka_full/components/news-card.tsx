export default function NewsCard({ news }: any){
  return (
    <article className="rounded-xl border overflow-hidden">
      {news.cover_image_url && (<img src={news.cover_image_url} alt="Couverture" className="w-full h-40 object-cover" loading="lazy" />)}
      <div className="p-4">
        <h3 className="font-semibold line-clamp-2">{news.title}</h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-3">{news.content}</p>
      </div>
    </article>
  );
}
