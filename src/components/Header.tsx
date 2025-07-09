'use client'

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState(0);

  return (
    <header className="header">
      <div className="container-custom">
        {/* Top bar */}
        <div className="header-top">
          <span>📍 Entregamos em toda a cidade</span>
          <div className="header-top-right">
            <span>📞 (11) 1234-5678</span>
            <span>🕒 Seg-Sáb: 7h às 22h</span>
          </div>
        </div>
        
        <hr className="header-divider" />
        
        {/* Main header */}
        <div className="header-main">
          <div className="header-content">
            {/* Logo */}
            <Link href="/" className="logo">
              🛒 SuperMercado
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
                👤 Minha Conta
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
          <div className="nav-links">
            <Link href="/" className="nav-link">Início</Link>
            <Link href="/categorias" className="nav-link">Categorias</Link>
            <Link href="/ofertas" className="nav-link">Ofertas</Link>
            <Link href="/contato" className="nav-link">Contato</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}