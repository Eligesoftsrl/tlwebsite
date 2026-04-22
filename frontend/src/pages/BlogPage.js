import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { blogArticles } from '../data/blogData';
import LazyImage from '../components/LazyImage';

const BlogPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog Tenuta Leone",
    "description": "Consigli, ispirazioni e storie dal mondo dei matrimoni e degli eventi d'autore a Salerno e in Campania.",
    "url": "https://www.tenutaleone.it/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Tenuta Leone",
      "url": "https://www.tenutaleone.it"
    }
  };

  return (
    <>
      <Helmet>
        <title>Blog | Ispirazioni e Consigli per il vostro Evento | Tenuta Leone</title>
        <meta name="description" content="Consigli, ispirazioni e storie dal mondo dei matrimoni e degli eventi d'autore a Salerno e in Campania. Il blog di Tenuta Leone." />
        <meta name="keywords" content="blog matrimoni salerno, consigli matrimonio campania, ispirazioni wedding, eventi dimora storica" />
        <meta property="og:title" content="Blog | Tenuta Leone" />
        <meta property="og:description" content="Ispirazioni e consigli per il vostro evento d'autore." />
        <link rel="canonical" href="https://www.tenutaleone.it/blog" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <main className="blog-page direzione-page" data-testid="blog-page">
        {/* Hero */}
        <section className="page-hero" style={{ backgroundImage: 'url(/img/slide/slide_2.jpg)' }}>
          <div className="page-hero-overlay"></div>
          <div className="container">
            <div className="page-hero-content">
              <span className="hero-label">IL NOSTRO BLOG</span>
              <h1 className="page-title">Storie, Ispirazioni e Consigli d'Autore.</h1>
              <p className="page-subtitle">Dal mondo dei matrimoni e degli eventi in Dimora Storica.</p>
            </div>
          </div>
          <div className="hero-scroll-indicator">
            <span>Scopri</span>
            <i className="fas fa-chevron-down"></i>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="content-section">
          <div className="container">
            <div className="blog-grid" data-testid="blog-grid">
              {blogArticles.map((article) => (
                <Link to={`/blog/${article.slug}`} key={article.slug} className="blog-card" data-testid={`blog-card-${article.slug}`}>
                  <div className="blog-card-image">
                    <LazyImage src={article.image} alt={article.imageAlt} />
                    <span className="blog-card-category">{article.category}</span>
                  </div>
                  <div className="blog-card-content">
                    <time className="blog-card-date">{new Date(article.date).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
                    <h2 className="blog-card-title">{article.title}</h2>
                    <p className="blog-card-excerpt">{article.excerpt}</p>
                    <span className="blog-card-cta">
                      Leggi l'articolo <i className="fas fa-arrow-right"></i>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogPage;
