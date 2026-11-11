import React, { useState } from 'react';
import { Search, CheckCircle2 } from 'lucide-react';

export default function Newsletter({ onSubscribeSuccess }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      if (onSubscribeSuccess) {
        onSubscribeSuccess(email);
      }
    }
  };

  return (
    <section id="newsletter" className="section-spacing" style={{ backgroundColor: '#FFFAF4', paddingTop: '20px' }}>
      <div className="container">
        <div className="newsletter-card">
          {/* Left Column: Heading, Subtitle, Form */}
          <div className="newsletter-content">
            <h2 className="newsletter-title">Stay Sweet with Antix!</h2>
            <p className="newsletter-sub">
              Get updates on new flavors, special offers & more.
            </p>

            {subscribed ? (
              <div className="newsletter-success">
                <CheckCircle2 size={24} color="#159B8E" />
                <span>You're in! Welcome to the sweet Antix family.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="newsletter-form">
                <div className="newsletter-input-wrapper">
                  <Search size={20} color="#9CA3AF" className="search-icon" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="newsletter-input"
                  />
                  <button type="submit" className="newsletter-submit-btn">
                    Subscribe
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Artisan Ice Cream Bowl */}
          <div className="newsletter-image-col">
            <div className="ice-cream-bowl-wrapper">
              <img
                src="/images/newsletter-ice-cream.jpg"
                alt="Antix artisanal ice cream bowl with multiple scoops, wafer roll and mint"
                className="ice-cream-bowl-img"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .newsletter-card {
          background-color: #FFF6E8;
          border-radius: 36px;
          padding: 60px;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          align-items: center;
          gap: 40px;
          border: 1px solid rgba(255, 214, 107, 0.4);
          box-shadow: 0 12px 30px rgba(66, 37, 31, 0.05);
        }

        .newsletter-title {
          font-size: 2.8rem;
          font-weight: 900;
          color: #3C2415;
          margin-bottom: 12px;
          line-height: 1.1;
        }

        .newsletter-sub {
          font-size: 1.05rem;
          color: #6E4138;
          margin-bottom: 32px;
          font-weight: 500;
        }

        .newsletter-form {
          max-width: 480px;
        }

        .newsletter-input-wrapper {
          display: flex;
          align-items: center;
          background: #ffffff;
          padding: 6px 6px 6px 18px;
          border-radius: var(--radius-full);
          box-shadow: 0 4px 16px rgba(66, 37, 31, 0.06);
          border: 1px solid rgba(66, 37, 31, 0.1);
          transition: border-color 0.2s ease;
        }

        .newsletter-input-wrapper:focus-within {
          border-color: #159B8E;
          box-shadow: 0 4px 20px rgba(21, 155, 142, 0.15);
        }

        .newsletter-input {
          flex: 1;
          padding: 10px 12px;
          font-size: 0.95rem;
          color: #3C2415;
          background: transparent;
        }

        .newsletter-input::placeholder {
          color: #9CA3AF;
        }

        .newsletter-submit-btn {
          background-color: #159B8E;
          color: #ffffff;
          font-weight: 800;
          font-size: 0.95rem;
          padding: 12px 28px;
          border-radius: var(--radius-full);
          transition: all var(--transition-normal);
        }

        .newsletter-submit-btn:hover {
          background-color: #0E7268;
          transform: scale(1.02);
        }

        .newsletter-success {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #ffffff;
          padding: 14px 24px;
          border-radius: var(--radius-full);
          color: #0E7268;
          font-weight: 700;
          box-shadow: var(--shadow-sm);
        }

        .newsletter-image-col {
          display: flex;
          justify-content: center;
        }

        .ice-cream-bowl-wrapper {
          width: 320px;
          height: 280px;
          border-radius: 32px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(66, 37, 31, 0.12);
          border: 4px solid #ffffff;
        }

        .ice-cream-bowl-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 900px) {
          .newsletter-card {
            grid-template-columns: 1fr;
            padding: 40px 24px;
            text-align: center;
          }
          .newsletter-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .newsletter-title {
            font-size: 2.2rem;
          }
          .newsletter-form {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
