import React from 'react';
import { SPECIAL_DEALS } from '../data/iceCreamData';

export default function SpecialOffers({ onOrderNow, onViewAllDeals }) {
  return (
    <section id="offers" className="section-spacing" style={{ backgroundColor: '#FFFAF4' }}>
      <div className="container">
        <div className="offers-grid">
          {/* Card 1: Teal Sweet Delight Banner */}
          <div className="sweet-delight-card">
            {/* Left Content */}
            <div className="sweet-delight-content">
              <div>
                <h2 className="sweet-delight-title">
                  SWEET<br />
                  <span className="sweet-delight-highlight">DELIGHT!</span>
                </h2>
                <div style={{ marginTop: '22px' }}>
                  <button
                    onClick={onOrderNow}
                    className="btn-white-teal"
                    style={{ fontSize: '1rem', padding: '13px 34px', fontWeight: 800 }}
                  >
                    Order Now
                  </button>
                </div>
              </div>

              <p className="sweet-delight-desc">
                From warm treats to indulgent creations, we serve happiness in every bite.
              </p>
            </div>

            {/* Right: Chocolate Ice Cream Bar with Bite */}
            <div className="sweet-delight-img-wrapper">
              <div className="chocolate-bar-floating">
                <img
                  src="/images/chocolate-icecream-bar.jpg"
                  alt="Delicious chocolate ice cream bar with almond crunch and bite taken out"
                  className="chocolate-bar-img"
                />
              </div>

              {/* Decorative floating chocolate flakes matching reference */}
              <div className="flake flake-1">🍫</div>
              <div className="flake flake-2">✨</div>
            </div>
          </div>

          {/* Card 2: 20% Discount Deals White Card */}
          <div className="discount-card">
            <h3 className="discount-title">
              20%<br />
              <span className="discount-sub">DISCOUNT</span>
            </h3>

            <div className="deal-items-list">
              {SPECIAL_DEALS.map((deal, idx) => (
                <React.Fragment key={deal.id}>
                  <div className="deal-item-row">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div className="deal-thumb-wrapper">
                        <img src={deal.image} alt={deal.title} className="deal-thumb" />
                      </div>
                      <div>
                        <h4 className="deal-item-title">{deal.title}</h4>
                        <span className="deal-item-desc">{deal.desc}</span>
                      </div>
                    </div>
                    <div className="deal-price-col">
                      <span className="deal-price-amount">$9.99</span>
                      <span className="deal-price-unit">each</span>
                    </div>
                  </div>
                  {idx === 0 && <div className="deal-divider" />}
                </React.Fragment>
              ))}
            </div>

            <button
              onClick={onViewAllDeals}
              className="btn-pink"
              style={{
                width: '100%',
                padding: '14px 20px',
                fontSize: '1rem',
                borderRadius: 'var(--radius-full)'
              }}
            >
              View All Deals
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .offers-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr;
          gap: 28px;
          align-items: stretch;
        }

        /* Teal Sweet Delight Card */
        .sweet-delight-card {
          background-color: #159B8E;
          border-radius: 32px;
          padding: 44px 40px;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
          box-shadow: 0 16px 36px rgba(21, 155, 142, 0.22);
        }

        .sweet-delight-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          min-height: 280px;
          z-index: 2;
          max-width: 290px;
        }

        .sweet-delight-title {
          font-size: 3.4rem;
          font-weight: 900;
          color: #ffffff;
          line-height: 1.05;
          letter-spacing: -0.5px;
        }

        .sweet-delight-highlight {
          color: #FFD66B;
          display: block;
        }

        .sweet-delight-desc {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.92);
          line-height: 1.5;
          margin-top: 24px;
        }

        .sweet-delight-img-wrapper {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1;
        }

        .chocolate-bar-floating {
          animation: floatSoft 5s ease-in-out infinite;
        }

        .chocolate-bar-img {
          width: 240px;
          height: 280px;
          object-fit: cover;
          border-radius: 28px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
          border: 4px solid rgba(255, 255, 255, 0.2);
        }

        .flake {
          position: absolute;
          font-size: 1.5rem;
          pointer-events: none;
        }

        .flake-1 {
          top: 10%;
          right: 15%;
          animation: floatSoft 4s ease-in-out infinite reverse;
        }

        .flake-2 {
          bottom: 15%;
          left: 10%;
          animation: floatSoft 6s ease-in-out infinite;
        }

        /* White Discount Card */
        .discount-card {
          background-color: #ffffff;
          border-radius: 32px;
          padding: 40px 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid rgba(66, 37, 31, 0.08);
          box-shadow: 0 12px 30px rgba(66, 37, 31, 0.07);
        }

        .discount-title {
          font-size: 3.2rem;
          font-weight: 900;
          color: #F04478;
          line-height: 0.95;
          margin-bottom: 24px;
        }

        .discount-sub {
          font-size: 1.4rem;
          letter-spacing: 2px;
          color: #3C2415;
          display: block;
          margin-top: 4px;
        }

        .deal-items-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 28px;
        }

        .deal-item-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .deal-thumb-wrapper {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          overflow: hidden;
          background: #FFF6D6;
          box-shadow: 0 4px 10px rgba(66, 37, 31, 0.08);
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .deal-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .deal-item-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: #3C2415;
          margin-bottom: 2px;
        }

        .deal-item-desc {
          font-size: 0.8rem;
          color: #9CA3AF;
          font-weight: 500;
        }

        .deal-price-col {
          text-align: right;
        }

        .deal-price-amount {
          display: block;
          font-size: 1.05rem;
          font-weight: 800;
          color: #3C2415;
        }

        .deal-price-unit {
          font-size: 0.78rem;
          color: #9CA3AF;
          font-weight: 600;
        }

        .deal-divider {
          height: 1px;
          background-color: rgba(66, 37, 31, 0.08);
          margin: 4px 0;
        }

        @media (max-width: 960px) {
          .offers-grid {
            grid-template-columns: 1fr;
          }
          .sweet-delight-card {
            flex-direction: column;
            gap: 32px;
            text-align: center;
          }
          .sweet-delight-content {
            max-width: 100%;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
}
