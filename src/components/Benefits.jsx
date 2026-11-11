import React from 'react';
import { Wheat, ChefHat, Truck, Leaf } from 'lucide-react';
import { BENEFITS_DATA } from '../data/iceCreamData';

export default function Benefits() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Wheat':
        return <Wheat size={36} strokeWidth={1.8} color="var(--color-chocolate)" />;
      case 'ChefHat':
        return <ChefHat size={36} strokeWidth={1.8} color="var(--color-chocolate)" />;
      case 'Truck':
        return <Truck size={36} strokeWidth={1.8} color="var(--color-chocolate)" />;
      case 'Leaf':
        return <Leaf size={36} strokeWidth={1.8} color="var(--color-chocolate)" />;
      default:
        return <Leaf size={36} strokeWidth={1.8} color="var(--color-chocolate)" />;
    }
  };

  return (
    <section className="section-spacing" style={{ backgroundColor: 'var(--color-cream)', paddingTop: '40px' }}>
      <div className="container">
        <div className="benefits-grid">
          {BENEFITS_DATA.map((benefit) => (
            <div key={benefit.id} className="benefit-col">
              <div className="benefit-icon-wrapper">
                {getIcon(benefit.icon)}
              </div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-desc">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Carousel pagination dots indicator as in reference */}
        <div className="benefits-dots">
          <span className="dot dot-active" />
          <span className="dot" />
          <span className="dot" />
        </div>
      </div>

      <style>{`
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          text-align: center;
        }

        .benefit-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 24px 16px;
          border-radius: var(--radius-md);
          transition: transform var(--transition-normal);
        }

        .benefit-col:hover {
          transform: translateY(-4px);
        }

        .benefit-icon-wrapper {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          box-shadow: 0 8px 20px rgba(66, 37, 31, 0.06);
          border: 1px solid rgba(66, 37, 31, 0.05);
          transition: all 0.3s ease;
        }

        .benefit-col:hover .benefit-icon-wrapper {
          transform: scale(1.1);
          box-shadow: 0 12px 28px rgba(240, 68, 120, 0.15);
          border-color: var(--color-soft-pink);
        }

        .benefit-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--color-chocolate);
          margin-bottom: 8px;
        }

        .benefit-desc {
          font-size: 0.9rem;
          color: var(--color-gray-600);
          line-height: 1.5;
          max-width: 200px;
        }

        .benefits-dots {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 48px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: rgba(66, 37, 31, 0.15);
          transition: all 0.2s ease;
        }

        .dot-active {
          width: 10px;
          background-color: var(--color-soft-pink);
        }

        @media (max-width: 860px) {
          .benefits-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 520px) {
          .benefits-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

