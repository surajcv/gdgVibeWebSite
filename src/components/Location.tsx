function Location() {
  return (
    <section className="section" id="location">
      <h2 className="section-title">Our Location</h2>
      <p className="section-description">
        We serve the surrounding community with fresh, handcrafted catering delivered on-time.
        Visit us or schedule a tasting appointment at our kitchen hub.
      </p>
      <div className="location-grid">
        <article className="location-card">
          <h3>Kitchen & Pickup Hub</h3>
          <p>123 Flavor Street<br/>Culinary District, Cityville</p>
          <p>Open Monday through Saturday</p>
          <p>Pickup hours: 9am – 6pm</p>
        </article>
        <article className="location-card">
          <h3>Service Area</h3>
          <p>Serving events across the metro area, including business districts, private venues, and outdoor celebrations.</p>
        </article>
      </div>
    </section>
  );
}

export default Location;
