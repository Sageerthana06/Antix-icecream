import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { FLAVORS_DATA } from '../data/iceCreamData';

export default function FlavorsCarousel({ onSelectFlavor }) {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="flavors" className="section-spacing" style={{ backgroundColor: '#FFFAF4', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="flavors-header-row">
          <div>
            <span className="script-tag">Explore</span>
            <h2 className="section-title">Our Delicious Creations</h2>
          </div>
          <p className="flavors-subtext">
            Since our first loaf came out of the oven, we've been dedicated to bringing you fresh, wholesome, and delicious baked goods.
          </p>
        </div>

        {/* Carousel Container with Arrow Controls */}
        <div style={{ position: 'relative', marginTop: '36px' }}>
          {/* Navigation Arrows positioned on edges */}
          <div className="flavors-arrows-wrapper">
            <button
              onClick={() => scroll('left')}
              className="nav-arrow-btn flavor-prev"
              aria-label="Previous flavors"
            >
              <ChevronLeft size={22} strokeWidth={2.5} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="nav-arrow-btn flavor-next"
              aria-label="Next flavors"
            >
              <ChevronRight size={22} strokeWidth={2.5} />
            </button>
          </div>

          {/* Horizontal scroll track */}
          <div
            ref={scrollContainerRef}
            className="flavors-track"
          >
            {FLAVORS_DATA.map((flavor) => (
              <div
                key={flavor.id}
                className="flavor-card"
                onClick={() => onSelectFlavor(flavor)}
              >
                {/* Colored Circle with High-Res AI Ice Cream Image */}
                <div
                  className="flavor-circle-wrapper"
                  style={{ backgroundColor: flavor.bgColor }}
                >
                  <img
                    src={flavor.image}
                    alt={flavor.name}
                    className="flavor-img"
                    loading="lazy"
                  />
                  {/* Hover Quick Add Icon */}
                  <div className="flavor-hover-badge">
                    <Plus size={22} color="#ffffff" strokeWidth={3} />
                  </div>
                </div>

                {/* Product Name */}
                <h3 className="flavor-title">{flavor.name}</h3>
                <span className="flavor-price">{flavor.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .flavors-header-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 32px;
          margin-bottom: 20px;
        }

        .flavors-subtext {
          max-width: 440px;
          font-size: 0.95rem;
          color: #6E4138;
          line-height: 1.6;
          font-weight: 500;
        }

        .flavors-arrows-wrapper {
          display: flex;
          justify-content: space-between;
          position: absolute;
          top: 42%;
          left: -20px;
          right: -20px;
          transform: translateY(-50%);
          pointer-events: none;
          z-index: 10;
        }

        .flavor-prev, .flavor-next {
          pointer-events: auto;
        }

        .flavors-track {
          display: flex;
          gap: 28px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding: 20px 10px 40px;
          justify-content: space-between;
        }

        .flavors-track::-webkit-scrollbar {
          display: none;
        }

        .flavor-card {
          flex: 0 0 calc(20% - 24px);
          min-width: 170px;
          scroll-snap-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          cursor: pointer;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .flavor-card:hover {
          transform: translateY(-8px);
        }

        .flavor-circle-wrapper {
          width: 175px;
          height: 175px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          margin-bottom: 18px;
          box-shadow: 0 10px 25px rgba(66, 37, 31, 0.08);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .flavor-card:hover .flavor-circle-wrapper {
          box-shadow: 0 18px 38px rgba(66, 37, 31, 0.16);
          transform: scale(1.05);
        }

        .flavor-img {
          width: 86%;
          height: 86%;
          object-fit: contain;
          transition: transform 0.4s ease;
        }

        .flavor-card:hover .flavor-img {
          transform: scale(1.12);
        }

        .flavor-hover-badge {
          position: absolute;
          inset: 0;
          background: rgba(21, 155, 142, 0.45);
          backdrop-filter: blur(2px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.25s ease;
          border-radius: 50%;
        }

        .flavor-card:hover .flavor-hover-badge {
          opacity: 1;
        }

        .flavor-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #3C2415;
          margin-bottom: 4px;
        }

        .flavor-price {
          font-size: 0.95rem;
          font-weight: 700;
          color: #159B8E;
        }

        @media (max-width: 900px) {
          .flavors-header-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          .flavors-track {
            justify-content: flex-start;
          }
          .flavor-card {
            flex: 0 0 160px;
          }
          .flavors-arrows-wrapper {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
