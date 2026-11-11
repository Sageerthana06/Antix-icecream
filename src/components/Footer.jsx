import React from 'react';
import { Instagram, Facebook, Twitter, Share2 } from 'lucide-react';

export default function Footer({ onLinkClick }) {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Flavors', href: '#flavors' },
    { label: 'Shop', href: '#offers' },
    { label: 'Recipes', href: '#gallery' },
    { label: 'Contact', href: '#newsletter' },
  ];

  const supportLinks = [
    'FAQ',
    'Shipping',
    'Returns',
    'Terms & Conditions',
    'Privacy Policy',
  ];

  return (
    <footer className="footer-section">
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="footer-grid">
          {/* Column 1: Brand */}
          <div className="footer-col-brand">
            <a href="#home" style={{ display: 'inline-block', marginBottom: '16px' }}>
              <span className="footer-logo">
                Antix
                <span className="footer-logo-dot" />
              </span>
            </a>
            <p className="footer-tagline">
              Scoop Happiness<br />in Every Bite!
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.querySelector(link.href);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="footer-link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Help & Support */}
          <div>
            <h4 className="footer-col-title">Help & Support</h4>
            <ul className="footer-links-list">
              {supportLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#support"
                    onClick={(e) => {
                      e.preventDefault();
                      if (onLinkClick) onLinkClick(item);
                    }}
                    className="footer-link"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div>
            <h4 className="footer-col-title">Follow Us</h4>
            <div className="footer-social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="Share"
              >
                <Share2 size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © 2026 Antix. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Decorative Mint Leaves at Bottom */}
      <div className="footer-mint-leaf-1">🌿</div>
      <div className="footer-mint-leaf-2">🍃</div>

      <style>{`
        .footer-section {
          background-color: #FFFAF4;
          border-top: 1px solid rgba(66, 37, 31, 0.08);
          padding-top: 64px;
          padding-bottom: 32px;
          position: relative;
          overflow: hidden;
        }

        .footer-logo {
          font-size: 2.2rem;
          font-weight: 900;
          color: #159B8E;
          letter-spacing: -0.5px;
          font-family: var(--font-main);
          position: relative;
        }

        .footer-logo-dot {
          position: absolute;
          top: 5px;
          right: -9px;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background-color: #F04478;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1fr;
          gap: 40px;
          margin-bottom: 50px;
        }

        .footer-tagline {
          font-size: 0.95rem;
          color: #6E4138;
          line-height: 1.5;
          font-weight: 600;
        }

        .footer-col-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: #3C2415;
          margin-bottom: 20px;
        }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-link {
          font-size: 0.92rem;
          color: #6E4138;
          font-weight: 500;
          transition: color 0.2s ease, transform 0.2s ease;
          display: inline-block;
        }

        .footer-link:hover {
          color: #F04478;
          transform: translateX(4px);
        }

        .footer-social-icons {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .social-icon-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #159B8E;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(21, 155, 142, 0.25);
        }

        .social-icon-btn:hover {
          background: #F04478;
          transform: translateY(-3px);
          box-shadow: 0 8px 18px rgba(240, 68, 120, 0.35);
        }

        .footer-bottom-bar {
          border-top: 1px solid rgba(66, 37, 31, 0.06);
          padding-top: 28px;
          text-align: center;
        }

        .footer-copyright {
          font-size: 0.85rem;
          color: #9CA3AF;
          font-weight: 500;
        }

        .footer-mint-leaf-1 {
          position: absolute;
          bottom: 20px;
          right: 30px;
          font-size: 2.2rem;
          opacity: 0.8;
          pointer-events: none;
        }

        .footer-mint-leaf-2 {
          position: absolute;
          bottom: 40px;
          right: 90px;
          font-size: 1.5rem;
          opacity: 0.6;
          pointer-events: none;
        }

        @media (max-width: 860px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
          }
        }

        @media (max-width: 520px) {
          .footer-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .footer-social-icons {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
}
