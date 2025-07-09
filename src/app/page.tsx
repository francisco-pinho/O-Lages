import Header from '@/components/Header';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="section-hero">
          <div className="container-custom">
            <div className="hero-content">
              <h1 className="hero-title animate-fade-in">
                Bem-vindo ao SuperMercado
              </h1>
              <p className="hero-subtitle animate-slide-up">
                Os melhores produtos com os melhores preços, entregue na sua casa!
              </p>
              <button className="btn btn-primary animate-bounce-gentle">
                Começar a Comprar 🛒
              </button>
            </div>
          </div>
        </section>

        {/* Categorias em Destaque */}
        <section className="section-padding" style={{backgroundColor: 'var(--gray-50)'}}>
          <div className="container-custom">
            <h2 style={{textAlign: 'center', marginBottom: '3rem', color: 'var(--gray-800)'}}>
              Categorias em Destaque
            </h2>
            
            <div className="grid-categories">
              {/* Categoria 1 */}
              <div className="card-category animate-fade-in">
                <div className="card-image category-1">
                  <span className="animate-bounce-gentle">🥬</span>
                </div>
                <div className="card-content">
                  <h3 className="card-title">Frutas & Verduras</h3>
                  <p className="card-description">Frescos e selecionados diariamente</p>
                </div>
              </div>

              {/* Categoria 2 */}
              <div className="card-category animate-fade-in">
                <div className="card-image category-2">
                  <span className="animate-bounce-gentle">🥛</span>
                </div>
                <div className="card-content">
                  <h3 className="card-title">Laticínios</h3>
                  <p className="card-description">Leite, queijos e iogurtes frescos</p>
                </div>
              </div>

              {/* Categoria 3 */}
              <div className="card-category animate-fade-in">
                <div className="card-image category-3">
                  <span className="animate-bounce-gentle">🍞</span>
                </div>
                <div className="card-content">
                  <h3 className="card-title">Padaria</h3>
                  <p className="card-description">Pães frescos assados diariamente</p>
                </div>
              </div>

              {/* Categoria 4 */}
              <div className="card-category animate-fade-in">
                <div className="card-image category-4">
                  <span className="animate-bounce-gentle">🥩</span>
                </div>
                <div className="card-content">
                  <h3 className="card-title">Carnes</h3>
                  <p className="card-description">Qualidade premium selecionada</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ofertas do Dia */}
        <section className="section-padding">
          <div className="container-custom">
            <h2 style={{textAlign: 'center', marginBottom: '3rem', color: 'var(--gray-800)'}}>
              🔥 Ofertas Imperdíveis do Dia
            </h2>
            
            <div className="grid-products">
              {/* Oferta 1 */}
              <div className="card-product">
                <div className="product-image">
                  <div className="card-image">
                    <span style={{fontSize: '4.5rem'}}>🍎</span>
                  </div>
                  <span className="discount-badge animate-bounce-gentle">
                    -30%
                  </span>
                </div>
                <div className="card-content">
                  <h3 className="card-title">Maçã Gala Premium</h3>
                  <p className="card-description">1kg - Doce e crocante</p>
                  <div className="price-container">
                    <span className="price-original">R$ 7,99</span>
                    <span className="price-current">R$ 5,59</span>
                  </div>
                  <button className="btn btn-cart">
                    Adicionar ao Carrinho
                  </button>
                </div>
              </div>

              {/* Oferta 2 */}
              <div className="card-product">
                <div className="product-image">
                  <div className="card-image">
                    <span style={{fontSize: '4.5rem'}}>🍌</span>
                  </div>
                  <span className="discount-badge animate-bounce-gentle">
                    -25%
                  </span>
                </div>
                <div className="card-content">
                  <h3 className="card-title">Banana Prata</h3>
                  <p className="card-description">1kg - Rica em potássio</p>
                  <div className="price-container">
                    <span className="price-original">R$ 4,99</span>
                    <span className="price-current">R$ 3,74</span>
                  </div>
                  <button className="btn btn-cart">
                    Adicionar ao Carrinho
                  </button>
                </div>
              </div>

              {/* Oferta 3 */}
              <div className="card-product">
                <div className="product-image">
                  <div className="card-image">
                    <span style={{fontSize: '4.5rem'}}>🥕</span>
                  </div>
                  <span className="discount-badge animate-bounce-gentle">
                    -20%
                  </span>
                </div>
                <div className="card-content">
                  <h3 className="card-title">Cenoura Orgânica</h3>
                  <p className="card-description">500g - 100% natural</p>
                  <div className="price-container">
                    <span className="price-original">R$ 2,49</span>
                    <span className="price-current">R$ 1,99</span>
                  </div>
                  <button className="btn btn-cart">
                    Adicionar ao Carrinho
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="newsletter">
          <div className="container-custom">
            <h2 className="newsletter-title">
              📧 Receba nossas ofertas exclusivas
            </h2>
            <p className="newsletter-subtitle">
              Cadastre-se e seja o primeiro a saber das promoções imperdíveis!
            </p>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="newsletter-input"
              />
              <button className="btn btn-secondary">
                Cadastrar
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container-custom">
          <div className="footer-content">
            <div className="footer-section">
              <h3>SuperMercado</h3>
              <p>Sua loja de confiança há mais de 20 anos, sempre com os melhores produtos.</p>
            </div>
            
            <div className="footer-section">
              <h4>Atendimento</h4>
              <ul className="footer-links">
                <li>📞 (11) 1234-5678</li>
                <li>📧 contato@supermercado.com</li>
                <li>🕒 Seg-Sáb: 7h às 22h</li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Links Úteis</h4>
              <ul className="footer-links">
                <li><a href="#">Política de Privacidade</a></li>
                <li><a href="#">Termos de Uso</a></li>
                <li><a href="#">Trocas e Devoluções</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Siga-nos</h4>
              <div className="footer-social">
                <span className="social-icon">📘</span>
                <span className="social-icon">📷</span>
                <span className="social-icon">🐦</span>
              </div>
            </div>
          </div>
          
          <hr className="footer-divider" />
          
          <div className="footer-bottom">
            <p>&copy; 2024 SuperMercado. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}