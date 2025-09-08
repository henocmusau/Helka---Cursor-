export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <main className="container py-8">
          <h1 className="text-3xl font-extrabold mb-6">Panneau d'administration</h1>
          {children}
        </main>
      </body>
    </html>
  );
}
