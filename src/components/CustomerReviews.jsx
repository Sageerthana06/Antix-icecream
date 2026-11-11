import React, { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { REVIEWS_DATA } from '../data/iceCreamData';

export default function CustomerReviews() {
  const reviewsTrackRef = useRef(null);

  const scrollReviews = (dir) => {
    if (reviewsTrackRef.current) {
      const scrollAmt = 340;
      reviewsTrackRef.current.scrollBy({
        left: dir === 'left' ? -scrollAmt : scrollAmt,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="section-spacing" style={{ backgroundColor: 'var(--color-cream)', position: 'relative' }}>
      <div className="container">
        {/* Header with Title and Nav Arrows */}
        <div className="reviews-header">
          <div>
            <span className="script-tag">Customer Favorites</span>
            <h2 className="section-title">Loved by Thousands</h2>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={() => scrollReviews('left')}
              className="nav-arrow-btn"
              aria-label="Previous review"
            >
              <ChevronLeft size={20} strokeWidth={2.5} />
            </button>
            <button
              onClick={() => scrollReviews('right')}
              className="nav-arrow-btn"
              aria-label="Next review"
            >
              <ChevronRight size={20} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Reviews Cards Grid / Track */}
        <div
          ref={reviewsTrackRef}
          className="reviews-track"
        >
          {REVIEWS_DATA.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-avatar-frame">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="review-avatar-img"
                />
              </div>

              <div className="review-stars">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={15} fill="#FFD66B" color="#FFD66B" />
                ))}
              </div>

              <p className="review-quote">"{review.quote}"</p>
              <span className="review-author">{review.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .reviews-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 36px;
        }

        .reviews-track {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .review-card {
          background-color: #ffffff;
          border-radius: var(--radius-lg);
          padding: 36px 28px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          border: 1px solid rgba(66, 37, 31, 0.06);
          box-shadow: var(--shadow-sm);
          transition: all var(--transition-normal);
        }

        .review-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-md);
          border-color: rgba(240, 68, 120, 0.2);
        }

        .review-avatar-frame {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          overflow: hidden;
          margin-bottom: 16px;
          border: 3px solid #FFF6D6;
          box-shadow: 0 4px 12px rgba(66, 37, 31, 0.1);
        }

        .review-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .review-stars {
          display: flex;
          gap: 4px;
          margin-bottom: 14px;
        }

        .review-quote {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--color-chocolate);
          margin-bottom: 12px;
          line-height: 1.4;
        }

        .review-author {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--color-gray-400);
        }

        @media (max-width: 860px) {
          .reviews-track {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            padding-bottom: 20px;
          }
          .review-card {
            flex: 0 0 280px;
            scroll-snap-align: center;
          }
        }
      `}</style>
    </section>
  );
}

