import Link from 'next/link';
export default function Navbar(){
  return (
    <header className="border-b">
      <nav className="container flex items-center gap-6 py-3">
        <Link href="/" className="font-extrabold">TP Helka</Link>
        <Link href="/team" className="hover:underline">Équipe</Link>
        <Link href="/matches" className="hover:underline">Matchs</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
        <div className="ml-auto"><Link href="/admin" className="text-sm">Admin</Link></div>
      </nav>
    </header>
  );
}
