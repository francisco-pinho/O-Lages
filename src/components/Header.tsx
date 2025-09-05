'use client'

import Link from 'next/link';
import { useState } from 'react';


const CATEGORIES = [
  { id: 'frutas', name: 'Frutas & Verduras', image: '/alface.jpg' },
  { id: 'laticinios', name: 'Laticínios', image: '/laticinios.jpg' },
  { id: 'padaria', name: 'Padaria', image: '/pao.jpg' },
  { id: 'carnes', name: 'Carnes', image: '/carnes.jpg' },
];

export default function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState(0);
  const [showCategories, setShowCategories] = useState(false);

  return (
    <header className="header">
      <div className="container-custom">
        {/* Top bar */}
        <div className="header-top">
          <span>A melhor qualidade sempre!</span>
          <div className="header-top-right">
            <span>📞 (351) </span>
            <span>🕒 Seg-Sex: 7:30h às 19h</span>
          </div>
        </div>
        
        <hr className="header-divider" />
        
        {/* Main header */}
        <div className="header-main">
          <div className="header-content">
            {/* Logo */}
            <Link href="/" className="logo">
              🛒 O Lages
            </Link>
            
            {/* Search bar */}
            <div className="search-container">
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <button className="search-button">
                🔍
              </button>
            </div>
            
            {/* User actions */}
            <div className="header-actions">
              <Link href="/conta" className="header-link">
                👤 A Minha Conta
              </Link>
              <Link href="/carrinho" className="header-link">
                🛒 Carrinho
                {cartItems > 0 && (
                  <span className="cart-badge">
                    {cartItems}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="nav">
          <div className="nav-links" style={{ position: 'relative' }}>
            <Link href="/" className="nav-link" prefetch={true}>Início</Link>
            <button
              className="nav-link"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit', fontSize: 'inherit', fontWeight: 'inherit' }}
              onClick={() => setShowCategories((v) => !v)}
              type="button"
            >
              Categorias
            </button>
            <Link href="/contato" className="nav-link">Contato</Link>

            <div
              style={{
                position: 'absolute',
                top: '2.5rem',
                left: 0,
                background: 'white',
                boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
                borderRadius: '0.5rem',
                zIndex: 100,
                minWidth: '220px',
                padding: '0.5rem 0',
                maxHeight: showCategories ? 500 : 0,
                opacity: showCategories ? 1 : 0,
                transform: showCategories ? 'translateY(0)' : 'translateY(-20px)',
                pointerEvents: showCategories ? 'auto' : 'none',
                transition: 'all 0.35s cubic-bezier(.4,1.3,.5,1), opacity 0.2s',
                overflow: 'hidden',
              }}
              onMouseLeave={() => setShowCategories(false)}
            >
              {CATEGORIES.map((cat) => (
                <div
                  key={cat.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.5rem 1rem',
                    cursor: 'pointer',
                    transition: 'background 0.2s',
                  }}
                  onClick={() => setShowCategories(false)}
                  onKeyDown={() => setShowCategories(false)}
                  tabIndex={0}
                >
                  <img src={cat.image} alt={cat.name} style={{ width: 32, height: 32, borderRadius: '0.25rem', objectFit: 'cover' }} />
                  <span style={{ color: '#1f2937', fontWeight: 500 }}>{cat.name}</span>
                </div>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}