import { useState, type ChangeEvent, type FormEvent } from 'react';

type Review = {
  name: string;
  quote: string;
  rating: number;
};

const initialReviews: Review[] = [
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
  const [reviewList, setReviewList] = useState<Review[]>(initialReviews);
  const [formState, setFormState] = useState({
    name: '',
    quote: '',
    rating: 5,
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormState((prev) => ({
      ...prev,
      [name]: name === 'rating' ? Number(value) : value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedName = formState.name.trim();
    const trimmedQuote = formState.quote.trim();

    if (!trimmedName || !trimmedQuote) {
      return;
    }

    const nextReview: Review = {
      name: trimmedName,
      quote: trimmedQuote,
      rating: formState.rating,
    };

    setReviewList((prev) => [nextReview, ...prev]);
    setFormState({ name: '', quote: '', rating: 5 });
  };

  return (
    <section className="section" id="reviews">
      <h2 className="section-title">Customer Reviews</h2>
      <p className="section-description">
        Hear from customers who loved our catering menus, friendly service, and event execution.
      </p>

      <div className="reviews-grid">
        {reviewList.map((review, index) => (
          <article className="review-card" key={`${review.name}-${index}`}>
            <div className="review-stars">{'★'.repeat(review.rating)}</div>
            <p>{review.quote}</p>
            <strong>{review.name}</strong>
          </article>
        ))}
      </div>

      <div className="review-form-card">
        <h3>Leave a comment</h3>
        <p>Share your experience and rate our catering service.</p>
        <form className="review-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Your name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formState.name}
            onChange={handleChange}
            placeholder="Jane Doe"
          />

          <label htmlFor="quote">Your comment</label>
          <textarea
            id="quote"
            name="quote"
            value={formState.quote}
            onChange={handleChange}
            placeholder="Tell us what you enjoyed about the menu or service."
          />

          <label htmlFor="rating">Your rating</label>
          <select
            id="rating"
            name="rating"
            value={formState.rating}
            onChange={handleChange}
          >
            <option value={5}>5 - Excellent</option>
            <option value={4}>4 - Very good</option>
            <option value={3}>3 - Good</option>
            <option value={2}>2 - Fair</option>
            <option value={1}>1 - Needs improvement</option>
          </select>

          <button type="submit" disabled={!formState.name.trim() || !formState.quote.trim()}>
            Submit review
          </button>
        </form>
      </div>
    </section>
  );
}

export default Reviews;
