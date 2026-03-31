import { Hero, Services, Menu, Location, Reviews, Contact, Footer } from './components';

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="brand">GDG Vibe Catering</div>
        <nav className="nav-links">
          <a href="#services">Services</a>
          <a href="#menu">Menu</a>
          <a href="#location">Location</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <Hero />
        <Services />
        <Menu />
        <Location />
        <Reviews />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
