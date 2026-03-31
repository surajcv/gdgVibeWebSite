function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <p>Premium catering for unforgettable moments</p>
        <h1>Delicious menus, effortless planning, and events that shine.</h1>
        <p>
          We design custom catering experiences for weddings, corporate events, private parties, and product launches.
          Fresh ingredients, beautiful presentation, and service that lets you relax.
        </p>
        <div className="hero-actions">
          <a className="button-primary" href="#contact">Book a Consultation</a>
          <a className="button-secondary" href="#menu">Explore the Menu</a>
        </div>
      </div>

      <div className="hero-card">
        <img
          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1000"
          alt="Fresh vegan salad bowl with vegetables"
        />
        <div className="hero-card-content">
          <h3>We make catering easy</h3>
          <p>
            From iconic appetizer spreads to handcrafted desserts, every dish is prepared with care for your guests.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
