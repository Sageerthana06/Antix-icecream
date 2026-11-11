import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FlavorsCarousel from './components/FlavorsCarousel';
import SpecialOffers from './components/SpecialOffers';
import Benefits from './components/Benefits';
import OurStory from './components/OurStory';
import CustomerReviews from './components/CustomerReviews';
import CommunityGallery from './components/CommunityGallery';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import {
  BookTableModal,
  SearchModal,
  CartDrawer,
  FlavorDetailModal,
  JoinTeamModal
} from './components/Modals';
import { FLAVORS_DATA, SPECIAL_DEALS } from './data/iceCreamData';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  // Modal states
  const [bookTableOpen, setBookTableOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [joinTeamOpen, setJoinTeamOpen] = useState(false);
  const [selectedFlavor, setSelectedFlavor] = useState(null);

  // Cart state with 2 default starter items for a vibrant preview
  const [cart, setCart] = useState([
    {
      id: 1,
      name: 'Salted Caramel',
      price: '$4.50',
      quantity: 1,
      image: FLAVORS_DATA[0].image
    },
    {
      id: 3,
      name: 'Chocolate Fudge',
      price: '$4.75',
      quantity: 2,
      image: FLAVORS_DATA[2].image
    }
  ]);

  // Toast notification state
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3800);
  };

  const handleAddToCart = (flavor) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === flavor.id);
      if (existing) {
        return prev.map((item) =>
          item.id === flavor.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [
          ...prev,
          {
            id: flavor.id,
            name: flavor.name,
            price: flavor.price,
            quantity: 1,
            image: flavor.image
          }
        ];
      }
    });
    showToast(`Added ${flavor.name} to your Sweet Bag! 🍨`);
  };

  const handleUpdateQuantity = (id, delta) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const handleCheckout = () => {
    setCart([]);
    showToast('Order placed successfully! Preparing your cold delivery 🚚💨');
  };

  const handleOrderNow = () => {
    // Add special delight to cart
    handleAddToCart({
      id: 99,
      name: 'Chocolate Delight Bar',
      price: '$6.50',
      image: 'https://images.unsplash.com/photo-1549395156-e0c1fe6fc7a5?auto=format&fit=crop&w=600&q=85'
    });
    setCartOpen(true);
  };

  const handleViewAllDeals = () => {
    showToast('Claimed 20% Discount code: SWEET20 applied at checkout! 🎉');
  };

  const handleReadStory = () => {
    showToast('Antix was founded with a single churn and a big dream to bring smiles worldwide! ✨');
  };

  const cartTotalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="antix-app" style={{ backgroundColor: 'var(--color-cream)', minHeight: '100vh' }}>
      {/* SECTION 1: HEADER */}
      <Navbar
        onOpenBookTable={() => setBookTableOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenCart={() => setCartOpen(true)}
        cartCount={cartTotalCount}
      />

      <main>
        {/* SECTION 2: HERO */}
        <Hero onJoinTeam={() => setJoinTeamOpen(true)} />

        {/* SECTION 3: FLAVORS */}
        <FlavorsCarousel onSelectFlavor={(flavor) => setSelectedFlavor(flavor)} />

        {/* SECTION 4: SPECIAL OFFERS */}
        <SpecialOffers
          onOrderNow={handleOrderNow}
          onViewAllDeals={handleViewAllDeals}
        />

        {/* SECTION 5: BENEFITS */}
        <Benefits />

        {/* SECTION 6: OUR STORY */}
        <OurStory onReadStory={handleReadStory} />

        {/* SECTION 7: CUSTOMER REVIEWS */}
        <CustomerReviews />

        {/* SECTION 8: COMMUNITY GALLERY */}
        <CommunityGallery />

        {/* SECTION 9: NEWSLETTER */}
        <Newsletter
          onSubscribeSuccess={(email) =>
            showToast(`Sweet! Subscribed ${email} to weekly Antix treats. 🍦`)
          }
        />
      </main>

      {/* SECTION 10: FOOTER */}
      <Footer onLinkClick={(item) => showToast(`Opening ${item} information...`)} />

      {/* INTERACTIVE MODALS */}
      <BookTableModal
        isOpen={bookTableOpen}
        onClose={() => setBookTableOpen(false)}
        onSubmitSuccess={showToast}
      />

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onCheckout={handleCheckout}
      />

      <FlavorDetailModal
        flavor={selectedFlavor}
        onClose={() => setSelectedFlavor(null)}
        onAddToCart={handleAddToCart}
      />

      <JoinTeamModal
        isOpen={joinTeamOpen}
        onClose={() => setJoinTeamOpen(false)}
        onSubmitSuccess={showToast}
      />

      {/* TOAST NOTIFICATION */}
      {toastMessage && (
        <div className="toast-notice">
          <CheckCircle2 size={20} color="#ffffff" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

