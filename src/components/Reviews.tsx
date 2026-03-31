const reviews = [
  {
    name: 'Priya S.',
    quote: 'The Indian menu was vibrant and flavorful, and the staff handled every detail so smoothly.',
    rating: 5,
  },
  {
    name: 'Aiden L.',
    quote: 'The Thai food stole the show at our company event — beautifully presented and perfectly spiced.',
    rating: 5,
  },
  {
    name: 'Maya R.',
    quote: 'Fantastic service, delicious food, and a seamless experience from tasting through delivery.',
    rating: 5,
  },
];

function Reviews() {
  return (
    <section className="section" id="reviews">
      <h2 className="section-title">Customer Reviews</h2>
      <p className="section-description">
        Hear from customers who loved our catering menus, friendly service, and event execution.
      </p>
      <div className="reviews-grid">
        {reviews.map((review) => (
          <article className="review-card" key={review.name}>
            <div className="review-stars">{'★'.repeat(review.rating)}</div>
            <p>{review.quote}</p>
            <strong>{review.name}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
