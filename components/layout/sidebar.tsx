import Link from 'next/link';

export default function Sidebar() {
  const menuItems = [
    { title: 'Dashboard', path: '/dashboard' },
    { title: 'StockShop', path: '/stockshop' },
    { title: 'Commerce', path: '/commerce' },
    { title: 'SmartOrder AI', path: '/ai' },
    { title: 'Delivery Hub', path: '/delivery' },
    { title: 'CRM', path: '/crm' },
    { title: 'FinanceTPE', path: '/finance' },
    { title: 'Analytics', path: '/analytics' },
    { title: 'Paramètres', path: '/settings' },
    { title: 'Marketplace', path: '/marketplace' }
  ];

  return (
    <aside style={{ width: '260px', height: '100vh', padding: '1rem', borderRight: '1px solid #ccc', background: '#fafafa' }}>
      <h2 style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>SMARTORDER OS</h2>
      <nav>
        {menuItems.map((item) => (
          <div key={item.path} style={{ margin: '1.2rem 0' }}>
            <Link href={item.path} style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>
              {item.title}
            </Link>
          </div>
        ))}
      </nav>
    </aside>
  );
}
