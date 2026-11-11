import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero({ onJoinTeam }) {
  return (
    <section id="home" className="hero-section">
      {/* Wave shape on the left matching the reference screenshot */}
      <div className="hero-teal-wave" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-grid">
          {/* Left Column: Heading, Subtitle, CTA */}
          <div className="hero-content">
            {/* Small decorative mint sprinkle shape from reference */}
            <div style={{ marginBottom: '16px' }}>
              <svg width="34" height="28" viewBox="0 0 34 28" fill="none">
                <path
                  d="M4.5 18C2 10 10.5 4 19 3C27.5 2 31 11.5 26.5 19C22 26.5 8 26 4.5 18Z"
                  fill="#159B8E"
                  opacity="0.85"
                />
              </svg>
            </div>

            <h1 className="hero-heading">
              <span className="hero-word-scoop">SCOOP.</span>
              <span className="hero-word-smile">SMILE.</span>
              <span className="hero-word-repeat">REPEAT!</span>
            </h1>

            <p className="hero-description">
              From classic favorites to exciting new flavors, every scoop is made to make you smile.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <button
                onClick={onJoinTeam}
                className="btn-pink hero-cta-btn"
              >
                <span>Join Our Team</span>
                <span className="hero-cta-arrow">
                  <ArrowRight size={17} strokeWidth={2.8} color="#F04478" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Ice Cream Cone + Floating Rating Badge */}
          <div className="hero-visual">
            {/* Floating Rating Badge Top Right */}
            <div className="hero-rating-badge">
              <span className="rating-score">4.9</span>
              <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#FFD66B" color="#FFD66B" />
                ))}
              </div>
              <span className="rating-since">since 1995</span>
            </div>

            {/* Central Decadent Waffle Bowl Ice Cream Visual */}
            <div className="hero-image-container">
              <img
                src="/images/hero-ice-cream.jpg"
                alt="Antix delicious artisanal ice cream waffle bowl with multiple scoops, sprinkles, cherry and strawberries"
                className="hero-main-img"
              />

              {/* Fresh cut strawberry accent on bottom left */}
              <div className="strawberry-left">
                <img
                  src="https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=200&q=80"
                  alt="Fresh strawberry cut slice"
                />
              </div>

              {/* Fresh cut strawberry accent on bottom right */}
              <div className="strawberry-right">
                <img
                  src="https://images.unsplash.com/photo-1543158181-e6f9f6712055?auto=format&fit=crop&w=200&q=80"
                  alt="Fresh ripe strawberry"
                />
              </div>

              {/* Floating Mint Leaves */}
              <div className="mint-leaf-accent">🌿</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          overflow: hidden;
          padding: 30px 0 70px;
          background: #FFFAF4;
        }

        .hero-teal-wave {
          position: absolute;
          top: 0;
          left: 0;
          width: 280px;
          height: 380px;
          background: radial-gradient(circle at 0% 40%, rgba(76, 211, 197, 0.45) 0%, rgba(93, 224, 209, 0.2) 50%, transparent 75%);
          border-radius: 0 50% 50% 0;
          pointer-events: none;
          z-index: 1;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          align-items: center;
          gap: 40px;
          min-height: 540px;
        }

        .hero-heading {
          font-size: 5rem;
          font-weight: 900;
          line-height: 1.02;
          letter-spacing: -1.5px;
          margin-bottom: 22px;
        }

        .hero-word-scoop {
          color: #3C2415;
          display: block;
        }

        .hero-word-smile {
          color: #F04478;
          display: block;
        }

        .hero-word-repeat {
          color: #159B8E;
          display: block;
        }

        .hero-description {
          font-size: 1.15rem;
          color: #42251F;
          opacity: 0.88;
          line-height: 1.6;
          max-width: 460px;
          margin-bottom: 34px;
          font-weight: 500;
        }

        .hero-cta-btn {
          padding: 13px 20px 13px 28px;
          font-size: 1.05rem;
          gap: 16px;
          border-radius: var(--radius-full);
          background: #F04478;
          box-shadow: 0 10px 24px rgba(240, 68, 120, 0.3);
        }

        .hero-cta-arrow {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease;
        }

        .hero-cta-btn:hover .hero-cta-arrow {
          transform: translateX(4px);
        }

        .hero-visual {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-rating-badge {
          position: absolute;
          top: 15px;
          right: 30px;
          background: #ffffff;
          padding: 14px 22px;
          border-radius: 20px;
          box-shadow: 0 12px 30px rgba(66, 37, 31, 0.1);
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 1px solid rgba(255, 246, 214, 0.9);
        }

        .rating-score {
          font-size: 1.85rem;
          font-weight: 900;
          color: #3C2415;
          line-height: 1;
        }

        .rating-stars {
          display: flex;
          gap: 3px;
          margin: 4px 0;
        }

        .rating-since {
          font-size: 0.8rem;
          color: #9CA3AF;
          font-weight: 600;
        }

        .hero-image-container {
          position: relative;
          width: 100%;
          max-width: 470px;
        }

        .hero-main-img {
          width: 100%;
          height: auto;
          border-radius: 36px;
          box-shadow: 0 25px 50px -12px rgba(66, 37, 31, 0.18);
          object-fit: cover;
          display: block;
        }

        .strawberry-left {
          position: absolute;
          bottom: 10px;
          left: -20px;
          width: 75px;
          height: 75px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid #ffffff;
          box-shadow: 0 8px 20px rgba(240, 68, 120, 0.25);
          z-index: 5;
        }

        .strawberry-left img, .strawberry-right img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .strawberry-right {
          position: absolute;
          bottom: -15px;
          right: 25px;
          width: 85px;
          height: 85px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid #ffffff;
          box-shadow: 0 8px 20px rgba(240, 68, 120, 0.25);
          z-index: 5;
        }

        .mint-leaf-accent {
          position: absolute;
          top: 30px;
          left: 15px;
          font-size: 1.8rem;
          z-index: 5;
        }

        @media (max-width: 1024px) {
          .hero-heading {
            font-size: 3.8rem;
          }
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 40px;
          }
          .hero-description {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-rating-badge {
            top: 0;
            right: 15px;
          }
        }

        @media (max-width: 640px) {
          .hero-heading {
            font-size: 2.8rem;
          }
          .hero-rating-badge {
            padding: 10px 14px;
          }
          .strawberry-left, .strawberry-right {
            width: 60px;
            height: 60px;
          }
        }
      `}</style>
    </section>
  );
}
