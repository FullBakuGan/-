import './Reviews.css'
import { reviews } from '../../data'

export default function Reviews() {
  

  return (
    <section id="reviews" className="reviews">
      <div className="container">
        <h2 className="section-title">Что говорят наши клиенты</h2>
        <p className="section-subtitle">
          Реальные отзывы от людей, которые уже воспользовались нашим сервисом
        </p>
        
        <div className="reviews-grid">
          {reviews.map(review => (
            <div key={review.id} className="review-card">
              <div className="review-rating">{review.rating}</div>
              <p className="review-text">"{review.text}"</p>
              <div className="review-author">
                <div className="author-avatar">{review.avatar}</div>
                <div className="author-info">
                  <div className="author-name">{review.author}</div>
                  <div className="author-details">{review.salon}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}