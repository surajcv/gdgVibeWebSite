function Contact() {
  return (
    <section className="section" id="contact">
      <h2 className="section-title">Book Your Event</h2>
      <p className="section-description">
        Ready to bring flavorful catering to your next event? Share a few details and we’ll get back to you with a custom proposal.
      </p>
      <div className="contact-grid">
        <div className="contact-card">
          <label htmlFor="name">Full Name</label>
          <input id="name" type="text" placeholder="Your name" />

          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" placeholder="you@example.com" />

          <label htmlFor="message">Event Details</label>
          <textarea id="message" placeholder="Tell us about your event, guest count, and preferred date."></textarea>

          <button type="button">Send Request</button>
        </div>

        <div className="contact-card">
          <h3>Need help planning?</h3>
          <p>
            We provide consultation for menu design, dietary accommodations, timeline planning, and day-of service.
          </p>
          <ul>
            <li>Custom tasting options</li>
            <li>Flexible delivery windows</li>
            <li>Equipment and staffing support</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
