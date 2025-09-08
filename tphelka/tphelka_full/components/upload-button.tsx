'use client';
import { useState } from 'react';
export default function UploadButton({ onUploaded }: { onUploaded: (url: string)=>void }){
  const [loading, setLoading] = useState(false);
  return (
    <label className="inline-flex items-center gap-2 cursor-pointer">
      <input type="file" className="hidden" accept="image/*,video/*" onChange={async (e)=>{
        const f = e.target.files?.[0]; if(!f) return;
        setLoading(true);
        const body = new FormData(); body.append('file', f);
        const res = await fetch('/api/upload', { method: 'POST', body });
        const json = await res.json(); setLoading(false);
        if(json.url) onUploaded(json.url);
      }} />
      <span className="rounded-2xl border px-4 py-2 text-sm">{loading? 'Téléversement...' : 'Uploader'}</span>
    </label>
  );
}
