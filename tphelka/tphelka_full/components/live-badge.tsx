'use client';
import { useEffect, useState } from 'react';
export default function LiveBadge(){
  const [isLive, setIsLive] = useState(false);
  useEffect(()=>{
    const es = new EventSource('/api/events');
    es.onmessage = ()=> setIsLive(true);
    es.onerror = ()=> setIsLive(false);
    return ()=> es.close();
  }, []);
  return (<span aria-live="polite" className={`rounded-full px-3 py-1 text-sm ${isLive?"bg-red-600 text-white":"bg-gray-200"}`}>{isLive?"EN DIRECT":"Hors ligne"}</span>);
}
