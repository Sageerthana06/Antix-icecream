import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function OurStory({ onReadStory }) {
  return (
    <section id="about" className="section-spacing" style={{ backgroundColor: '#FFFAF4' }}>
      <div className="container">
        <div className="story-card">
          {/* Left Content */}
          <div className="story-content">
            <span className="story-tag">Our Story</span>
            <h2 className="story-title">
              Crafted with Passion,<br />Served with Love
            </h2>
            <p className="story-desc">
              It's all about the little sweet moments — because life is better with ice cream! What started as a small kitchen experiment is now your favorite ice cream destination.
            </p>
            <div>
              <button
                onClick={onReadStory}
                className="btn-white story-btn"
              >
                <span>Read Our Story</span>
                <span className="story-btn-arrow">
                  <ArrowRight size={16} strokeWidth={2.8} color="#F04478" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="story-image-col">
            <div className="story-img-frame">
              <img
                src="/images/our-story.jpg"
                alt="Antix passionate artisan ice cream team smiling together with waffle cones"
                className="story-img"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .story-card {
          background-color: #F8B6C5;
          border-radius: 36px;
          padding: 60px;
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          align-items: center;
          gap: 48px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 16px 36px rgba(240, 68, 120, 0.15);
        }

        .story-tag {
          font-family: var(--font-script);
          font-size: 2.4rem;
          color: #ffffff;
          line-height: 1;
          display: inline-block;
          margin-bottom: 12px;
          font-weight: 700;
          text-shadow: 0 2px 4px rgba(66, 37, 31, 0.1);
        }

        .story-title {
          font-size: 2.8rem;
          font-weight: 900;
          color: #3C2415;
          line-height: 1.15;
          letter-spacing: -0.5px;
          margin-bottom: 20px;
        }

        .story-desc {
          font-size: 1.05rem;
          color: #3C2415;
          opacity: 0.92;
          line-height: 1.6;
          margin-bottom: 32px;
          max-width: 460px;
          font-weight: 500;
        }

        .story-btn {
          color: #F04478;
          padding: 12px 18px 12px 28px;
          font-size: 0.96rem;
          font-weight: 800;
          border-radius: var(--radius-full);
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #ffffff;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.2s ease;
        }

        .story-btn-arrow {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #FCE4EC;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease;
        }

        .story-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
        }

        .story-btn:hover .story-btn-arrow {
          transform: translateX(3px);
        }

        .story-image-col {
          display: flex;
          justify-content: center;
        }

        .story-img-frame {
          width: 100%;
          max-width: 440px;
          height: 330px;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(66, 37, 31, 0.18);
          border: 4px solid #ffffff;
          transition: transform var(--transition-normal);
        }

        .story-card:hover .story-img-frame {
          transform: scale(1.02);
        }

        .story-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 900px) {
          .story-card {
            grid-template-columns: 1fr;
            padding: 40px 24px;
            text-align: center;
            gap: 36px;
          }
          .story-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .story-title {
            font-size: 2.2rem;
          }
        }
      `}</style>
    </section>
  );
}
