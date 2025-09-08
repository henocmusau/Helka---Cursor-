import UploadButton from '@/components/upload-button';

export default async function AdminNews(){
  const items = [{ id:1, title:'Titre', content:'Contenu' }];
  async function create(form: FormData){
    'use server';
    // Insert via drizzle (omitted)
  }
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <form action={create} className="space-y-3">
        <h2 className="font-semibold">Nouvel article</h2>
        <input name="title" className="input" placeholder="Titre" required />
        <textarea name="content" className="input h-40" placeholder="Contenu" required />
        <input type="hidden" name="cover" id="cover" />
        <UploadButton onUploaded={(url)=>{ const el = document.getElementById('cover') as HTMLInputElement; if(el) el.value = url; }} />
        <button className="rounded-2xl bg-brand px-5 py-2 text-white">Publier</button>
      </form>

      <ul className="space-y-3">
        {items.map(n => <li key={n.id} className="rounded-xl border p-3"><div className="font-semibold">{n.title}</div><div className="text-sm line-clamp-2">{n.content}</div></li>)}
      </ul>
    </div>
  );
}
