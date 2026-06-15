import Sidebar from '../components/layout/sidebar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='fr'>
      <body style={{ display: 'flex', margin: 0 }}>
        <Sidebar />
        <main style={{ flex: 1, padding: '2rem' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
