import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenBookTable, onOpenSearch, onOpenCart, cartCount = 2 }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Flavors', href: '#flavors' },
    { name: 'Shop', href: '#offers' },
    { name: 'Recipes', href: '#gallery' },
    { name: 'Contact', href: '#newsletter' },
  ];

  const handleNavClick = (linkName, href) => {
    setActiveLink(linkName);
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: isScrolled ? 'rgba(255, 250, 244, 0.96)' : 'var(--color-cream)',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        boxShadow: isScrolled ? '0 4px 20px rgba(66, 37, 31, 0.06)' : 'none',
        transition: 'all 0.3s ease',
        borderBottom: isScrolled ? '1px solid rgba(66, 37, 31, 0.05)' : '1px solid transparent',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '84px' }}>
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); handleNavClick('Home', '#home'); }}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
        >
          <span style={{
            fontSize: '2rem',
            fontWeight: 900,
            color: 'var(--color-teal)',
            letterSpacing: '-0.5px',
            fontFamily: 'var(--font-main)',
            position: 'relative',
            display: 'inline-block'
          }}>
            Antix
            <span style={{
              position: 'absolute',
              top: '4px',
              right: '-8px',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-hot-pink)'
            }}></span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = activeLink === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.name, link.href);
                }}
                style={{
                  fontSize: '0.95rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? 'var(--color-chocolate)' : 'var(--color-gray-600)',
                  position: 'relative',
                  padding: '6px 2px',
                  transition: 'color 0.2s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-hot-pink)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? 'var(--color-chocolate)' : 'var(--color-gray-600)')}
              >
                {link.name}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '18px',
                      height: '3px',
                      borderRadius: '4px',
                      backgroundColor: 'var(--color-teal)'
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* Search Button */}
          <button
            onClick={onOpenSearch}
            aria-label="Search"
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-chocolate)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(21, 155, 142, 0.1)';
              e.currentTarget.style.color = 'var(--color-teal)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--color-chocolate)';
            }}
          >
            <Search size={21} strokeWidth={2.2} />
          </button>

          {/* Shopping Bag Button with badge */}
          <button
            onClick={onOpenCart}
            aria-label="Shopping bag"
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-chocolate)',
              position: 'relative',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(240, 68, 120, 0.1)';
              e.currentTarget.style.color = 'var(--color-hot-pink)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--color-chocolate)';
            }}
          >
            <ShoppingBag size={21} strokeWidth={2.2} />
            {cartCount > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: '4px',
                  right: '3px',
                  backgroundColor: 'var(--color-hot-pink)',
                  color: '#ffffff',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  minWidth: '18px',
                  height: '18px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0 4px',
                  border: '2px solid var(--color-cream)',
                }}
              >
                {cartCount}
              </span>
            )}
          </button>

          {/* Book a table Button */}
          <button
            onClick={onOpenBookTable}
            className="btn-pink desktop-book-btn"
            style={{
              padding: '11px 24px',
              fontSize: '0.92rem',
              letterSpacing: '0.2px',
            }}
          >
            Book a table
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle-btn"
            aria-label="Toggle menu"
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-chocolate)',
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '84px',
            left: 0,
            right: 0,
            backgroundColor: 'var(--color-cream)',
            borderBottom: '2px solid rgba(66, 37, 31, 0.08)',
            padding: '24px',
            boxShadow: 'var(--shadow-lg)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            animation: 'slideDown 0.25s ease-out'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.name, link.href);
              }}
              style={{
                fontSize: '1.1rem',
                fontWeight: activeLink === link.name ? 800 : 600,
                color: activeLink === link.name ? 'var(--color-hot-pink)' : 'var(--color-chocolate)',
                padding: '10px 0',
                borderBottom: '1px solid rgba(66, 37, 31, 0.06)'
              }}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBookTable();
            }}
            className="btn-pink"
            style={{ width: '100%', marginTop: '8px' }}
          >
            Book a table
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .desktop-book-btn {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: flex !important;
          }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
}

