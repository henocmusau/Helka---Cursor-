import React from 'react';
export default async function AdminHome(){
  // Placeholder counts
  const articles = 5;
  const players = 25;
  const matches = 10;
  return (
    <div className="grid gap-6 sm:grid-cols-3">
      <div className="rounded-xl border p-6"><div className="text-3xl font-bold">{articles}</div><div>Articles</div></div>
      <div className="rounded-xl border p-6"><div className="text-3xl font-bold">{players}</div><div>Joueurs</div></div>
      <div className="rounded-xl border p-6"><div className="text-3xl font-bold">{matches}</div><div>Matchs</div></div>
    </div>
  );
}
