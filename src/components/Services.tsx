const services = [
  {
    title: 'Event Catering',
    description: 'Full-service catering for weddings, birthdays, and anniversaries with seasonal menus and elegant presentation.',
  },
  {
    title: 'Corporate Packages',
    description: 'Business lunches, conference catering, and team celebrations designed to impress clients and employees alike.',
  },
  {
    title: 'Pickup & Delivery',
    description: 'Delicious ready-to-serve meals for smaller gatherings, drop-offs, and last-minute orders.',
  },
];

function Services() {
  return (
    <section className="section" id="services">
      <h2 className="section-title">Services</h2>
      <p className="section-description">
        Choose from custom event menus, plated meals, buffet setups, and delivery options. We handle food, setup, and service so you can enjoy the celebration.
      </p>
      <div className="cards-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
