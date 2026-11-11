import React, { useState } from 'react';
import { X, Search, Calendar, Users, Clock, ShoppingBag, Plus, Minus, Trash2, CheckCircle2 } from 'lucide-react';
import { FLAVORS_DATA } from '../data/iceCreamData';

export function BookTableModal({ isOpen, onClose, onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    guests: '2 Guests',
    date: '2026-11-15',
    time: '18:00',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
    onSubmitSuccess(`Table booked successfully for ${formData.name}! A confirmation SMS has been sent.`);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
          <X size={20} />
        </button>

        <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-chocolate)', marginBottom: '8px' }}>
          Book a Table
        </h3>
        <p style={{ fontSize: '0.92rem', color: 'var(--color-gray-600)', marginBottom: '24px' }}>
          Reserve your sweet spot at our artisanal parlor.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '6px' }}>Your Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Jessica Taylor"
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-gray-200)',
                background: 'var(--color-gray-50)',
                fontSize: '0.95rem'
              }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '6px' }}>Date</label>
              <div style={{ position: 'relative' }}>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 12px 12px 16px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-gray-200)',
                    background: 'var(--color-gray-50)',
                    fontSize: '0.92rem'
                  }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '6px' }}>Time</label>
              <input
                type="time"
                required
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px 12px 12px 16px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-gray-200)',
                  background: 'var(--color-gray-50)',
                  fontSize: '0.92rem'
                }}
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '6px' }}>Party Size</label>
            <select
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-gray-200)',
                background: 'var(--color-gray-50)',
                fontSize: '0.95rem'
              }}
            >
              <option>1 Person</option>
              <option>2 Guests</option>
              <option>3-4 Guests</option>
              <option>5-8 Guests (Party)</option>
            </select>
          </div>

          <button
            type="submit"
            className="btn-pink"
            style={{ marginTop: '12px', padding: '14px', width: '100%' }}
          >
            Confirm Reservation
          </button>
        </form>
      </div>
    </div>
  );
}

export function SearchModal({ isOpen, onClose, onAddToCart }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredFlavors = FLAVORS_DATA.filter(f =>
    f.name.toLowerCase().includes(query.toLowerCase()) ||
    f.tagline.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '600px' }}>
        <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
          <X size={20} />
        </button>

        <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-chocolate)', marginBottom: '16px' }}>
          Search Antix Flavors
        </h3>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '12px 18px',
          background: 'var(--color-gray-100)',
          borderRadius: 'var(--radius-full)',
          marginBottom: '24px'
        }}>
          <Search size={20} color="var(--color-teal)" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a flavor, e.g. Pistachio, Caramel, Vanilla..."
            style={{ width: '100%', background: 'transparent', fontSize: '1rem' }}
          />
        </div>

        <div style={{ maxHeight: '320px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {filteredFlavors.length > 0 ? (
            filteredFlavors.map(flavor => (
              <div
                key={flavor.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px',
                  borderRadius: 'var(--radius-md)',
                  background: flavor.bgColor,
                  transition: 'transform 0.2s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <img
                    src={flavor.image}
                    alt={flavor.name}
                    style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <div>
                    <h4 style={{ fontWeight: 800, color: 'var(--color-chocolate)' }}>{flavor.name}</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-gray-600)' }}>{flavor.tagline}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontWeight: 800, color: 'var(--color-teal)' }}>{flavor.price}</span>
                  <button
                    onClick={() => {
                      onAddToCart(flavor);
                      onClose();
                    }}
                    className="btn-pink"
                    style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                  >
                    Add
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p style={{ textAlign: 'center', color: 'var(--color-gray-400)', padding: '24px 0' }}>
              No sweet flavors found matching "{query}".
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onCheckout }) {
  if (!isOpen) return null;

  const total = cartItems.reduce((sum, item) => {
    const num = parseFloat(item.price.replace('$', '')) || 4.5;
    return sum + num * item.quantity;
  }, 0);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '460px',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <button onClick={onClose} className="modal-close-btn" aria-label="Close cart">
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
          <ShoppingBag size={24} color="var(--color-hot-pink)" />
          <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-chocolate)' }}>
            Your Sweet Bag
          </h3>
        </div>

        {cartItems.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <p style={{ color: 'var(--color-gray-400)', fontSize: '1.05rem', marginBottom: '20px' }}>
              Your bag is currently empty!
            </p>
            <button onClick={onClose} className="btn-pink">
              Explore Creations
            </button>
          </div>
        ) : (
          <>
            <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '14px', paddingRight: '6px' }}>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 14px',
                    background: 'var(--color-gray-50)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-gray-200)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }}
                    />
                    <div>
                      <h4 style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--color-chocolate)' }}>
                        {item.name}
                      </h4>
                      <span style={{ fontSize: '0.85rem', color: 'var(--color-teal)', fontWeight: 700 }}>
                        {item.price}
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        background: '#ffffff',
                        border: '1px solid var(--color-gray-200)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Minus size={14} />
                    </button>
                    <span style={{ fontWeight: 700, minWidth: '18px', textAlign: 'center' }}>
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        background: '#ffffff',
                        border: '1px solid var(--color-gray-200)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ borderTop: '1px solid var(--color-gray-200)', paddingTop: '20px', marginTop: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ fontWeight: 600, color: 'var(--color-gray-600)' }}>Subtotal</span>
                <span style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--color-chocolate)' }}>
                  ${total.toFixed(2)}
                </span>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onCheckout();
                }}
                className="btn-pink"
                style={{ width: '100%', padding: '14px', fontSize: '1rem' }}
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export function FlavorDetailModal({ flavor, onClose, onAddToCart }) {
  if (!flavor) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '440px', textAlign: 'center' }}>
        <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
          <X size={20} />
        </button>

        <div style={{
          width: '160px',
          height: '160px',
          borderRadius: '50%',
          margin: '0 auto 20px',
          overflow: 'hidden',
          backgroundColor: flavor.bgColor,
          boxShadow: 'var(--shadow-md)'
        }}>
          <img src={flavor.image} alt={flavor.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        <span className="script-tag" style={{ fontSize: '1.8rem' }}>Artisanal Scoop</span>
        <h3 style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--color-chocolate)', marginBottom: '8px' }}>
          {flavor.name}
        </h3>
        <p style={{ color: 'var(--color-gray-600)', marginBottom: '16px', lineHeight: 1.5 }}>
          {flavor.tagline}. Crafted from premium organic cream and hand-selected ingredients.
        </p>

        <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--color-teal)', marginBottom: '24px' }}>
          {flavor.price}
        </div>

        <button
          onClick={() => {
            onAddToCart(flavor);
            onClose();
          }}
          className="btn-pink"
          style={{ width: '100%', padding: '14px', fontSize: '1rem' }}
        >
          Add to Sweet Bag
        </button>
      </div>
    </div>
  );
}

export function JoinTeamModal({ isOpen, onClose, onSubmitSuccess }) {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
    onSubmitSuccess("Thank you for your interest! Our team will contact you shortly.");
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
          <X size={20} />
        </button>

        <span className="script-tag" style={{ fontSize: '1.8rem' }}>Join the Family</span>
        <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-chocolate)', marginBottom: '8px' }}>
          Join Our Team
        </h3>
        <p style={{ fontSize: '0.92rem', color: 'var(--color-gray-600)', marginBottom: '20px' }}>
          Passionate about ice cream? We'd love to scoop together!
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <input
            type="text"
            required
            placeholder="Full Name"
            style={{ padding: '12px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-gray-200)', background: 'var(--color-gray-50)' }}
          />
          <input
            type="email"
            required
            placeholder="Email Address"
            style={{ padding: '12px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-gray-200)', background: 'var(--color-gray-50)' }}
          />
          <select
            style={{ padding: '12px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-gray-200)', background: 'var(--color-gray-50)' }}
          >
            <option>Scoop Artisan / Barista</option>
            <option>Pastry & Cone Baker</option>
            <option>Store Manager</option>
            <option>Cold Delivery Driver</option>
          </select>
          <button type="submit" className="btn-pink" style={{ padding: '14px', marginTop: '8px' }}>
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}

