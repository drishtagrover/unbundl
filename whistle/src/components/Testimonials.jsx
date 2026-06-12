import { useState, useEffect } from 'react';
import '../cssFiles/Testimonials.css';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/data/testimonials.json')
      .then(res => {
        if (!res.ok) throw new Error('Failed to load testimonials');
        return res.json();
      })
      .then(data => {
        setTestimonials(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="testimonials">
        <h2 className="testimonials-title">What Our Patients Say</h2>
        <div className="testimonials-status">
          <div className="spinner" />
          <p>Loading testimonials...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="testimonials">
        <h2 className="testimonials-title">What Our Patients Say</h2>
        <div className="testimonials-status testimonials-status--error">
          <p>Unable to load testimonials. Please try again later.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="testimonials">
      <h2 className="testimonials-title">What Our Patients Say</h2>
      <div className="testimonials-grid">
        {testimonials.map(t => (
          <div className="testimonial-card" key={t.id}>
            <div className="testimonial-stars">
              {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
            </div>
            <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
            <div className="testimonial-author">
              <strong>{t.name}</strong>
              <span>{t.location}</span>
            </div>
            <span className="testimonial-treatment">{t.treatment}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
