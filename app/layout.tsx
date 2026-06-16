export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        {/* Si la Sidebar n'est pas encore prête, nous l'avons temporairement retirée */}
        <main>{children}</main>
      </body>
    </html>
  );
}