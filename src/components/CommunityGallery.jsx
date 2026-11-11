import React, { useState } from 'react';
import { Instagram, Heart } from 'lucide-react';
import { GALLERY_DATA } from '../data/iceCreamData';

export default function CommunityGallery() {
  const [likes, setLikes] = useState({ 1: 142, 2: 289, 3: 95, 4: 210 });

  const handleLike = (id, e) => {
    e.stopPropagation();
    setLikes(prev => ({ ...prev, [id]: prev[id] + 1 }));
  };

  return (
    <section id="gallery" className="section-spacing" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="container">
        <div className="gallery-banner">
          {/* Header */}
          <div className="gallery-header">
            <span className="gallery-subtitle">Sweet Moments</span>
            <h2 className="gallery-title">Shared With Our Community</h2>
            <p className="gallery-tag">Tag us @antix_icecream to get featured</p>
          </div>

          {/* 4 Photos Grid */}
          <div className="gallery-grid">
            {GALLERY_DATA.map((item) => (
              <div key={item.id} className="gallery-item-card">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="gallery-img"
                  loading="lazy"
                />

                {/* Hover overlay with like counter & handle */}
                <div className="gallery-overlay">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ffffff' }}>
                    <Instagram size={22} />
                    <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>@antix_icecream</span>
                  </div>

                  <button
                    onClick={(e) => handleLike(item.id, e)}
                    className="gallery-like-btn"
                    aria-label="Like photo"
                  >
                    <Heart size={18} fill="#ffffff" color="#ffffff" />
                    <span>{likes[item.id]}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .gallery-banner {
          background-color: var(--color-teal);
          border-radius: var(--radius-lg);
          padding: 60px 48px;
          color: #ffffff;
          box-shadow: var(--shadow-teal);
        }

        .gallery-header {
          margin-bottom: 40px;
        }

        .gallery-subtitle {
          font-family: var(--font-script);
          font-size: 2.3rem;
          color: var(--color-butter-yellow);
          line-height: 1;
          display: block;
          margin-bottom: 8px;
          font-weight: 700;
        }

        .gallery-title {
          font-size: 2.6rem;
          font-weight: 900;
          color: #ffffff;
          line-height: 1.15;
          letter-spacing: -0.5px;
          margin-bottom: 8px;
        }

        .gallery-tag {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.85);
          font-weight: 500;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .gallery-item-card {
          position: relative;
          height: 240px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.15);
          cursor: pointer;
        }

        .gallery-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .gallery-item-card:hover .gallery-img {
          transform: scale(1.08);
        }

        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.1) 60%, transparent 100%);
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          padding: 16px;
          opacity: 0;
          transition: opacity 0.25s ease;
        }

        .gallery-item-card:hover .gallery-overlay {
          opacity: 1;
        }

        .gallery-like-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(240, 68, 120, 0.85);
          color: #ffffff;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.82rem;
          font-weight: 700;
          transition: transform 0.15s ease;
        }

        .gallery-like-btn:hover {
          transform: scale(1.1);
          background: var(--color-hot-pink);
        }

        @media (max-width: 960px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .gallery-banner {
            padding: 40px 24px;
          }
        }

        @media (max-width: 560px) {
          .gallery-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

