import { useEffect, useState, type ComponentType } from 'react';
import { Hero, Services, Menu, Location, Reviews, Contact, Footer } from './components';

type PageId = 'home' | 'services' | 'menu' | 'location' | 'reviews' | 'contact';

const pages: Array<{
  id: PageId;
  label: string;
  themeClass: string;
  Component: ComponentType;
}> = [
  { id: 'home', label: 'Home', themeClass: 'theme-sunrise', Component: Hero },
  { id: 'services', label: 'Services', themeClass: 'theme-olive', Component: Services },
  { id: 'menu', label: 'Menu', themeClass: 'theme-cobalt', Component: Menu },
  { id: 'location', label: 'Location', themeClass: 'theme-lavender', Component: Location },
  { id: 'reviews', label: 'Reviews', themeClass: 'theme-dusk', Component: Reviews },
  { id: 'contact', label: 'Contact', themeClass: 'theme-teal', Component: Contact },
];

function App() {
  const [activePage, setActivePage] = useState<PageId>('home');

  useEffect(() => {
    const updatePage = () => {
      const hash = (window.location.hash || '#home').replace('#', '') as PageId;
      const validPage = pages.some((page) => page.id === hash) ? hash : 'home';
      setActivePage(validPage);
    };

    updatePage();
    window.addEventListener('hashchange', updatePage);
    return () => window.removeEventListener('hashchange', updatePage);
  }, []);

  const currentPage = pages.find((page) => page.id === activePage) ?? pages[0];
  const ActiveComponent = currentPage.Component;

  return (
    <div className={`app-shell ${currentPage.themeClass}`}>
      <header className="site-header">
        <div className="brand">GDG Vibe Catering</div>
        <nav className="nav-links">
          {pages.map((page) => (
            <a key={page.id} href={`#${page.id}`} className={page.id === activePage ? 'active' : ''}>
              {page.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="page-content">
        <ActiveComponent />
      </main>

      <Footer />
    </div>
  );
}

export default App;
