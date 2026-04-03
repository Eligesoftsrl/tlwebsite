import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogArticles } from '../data/blogData';
import LazyImage from '../components/LazyImage';

const BlogArticlePage = () => {
  const { slug } = useParams();
  const article = blogArticles.find(a => a.slug === slug);

  if (!article) {
    return (
      <main className="direzione-page">
        <section className="content-section" style={{ textAlign: 'center', paddingTop: '200px' }}>
          <div className="container">
            <h1>Articolo non trovato</h1>
            <Link to="/blog" className="btn-primary">Torna al Blog</Link>
          </div>
        </section>
      </main>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.excerpt,
    "image": `https://www.tenutaleone.it${article.image}`,
    "datePublished": article.date,
    "author": {
      "@type": "Organization",
      "name": article.author,
      "url": "https://www.tenutaleone.it"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Tenuta Leone",
      "url": "https://www.tenutaleone.it"
    },
    "mainEntityOfPage": `https://www.tenutaleone.it/blog/${article.slug}`,
    "keywords": (article.tags || []).map(t => `#${t}`).join(', ')
  };

  return (
    <>
      <Helmet>
        <title>{`${article.title} | Blog Tenuta Leone`}</title>
        <meta name="description" content={article.excerpt} />
        <meta name="keywords" content={article.keywords} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:image" content={`https://www.tenutaleone.it${article.image}`} />
        <meta property="og:type" content="article" />
        <link rel="canonical" href={`https://www.tenutaleone.it/blog/${article.slug}`} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <main className="blog-article-page direzione-page" data-testid="blog-article-page">
        {/* Hero */}
        <section className="page-hero" style={{ backgroundImage: `url(${article.image})` }}>
          <div className="page-hero-overlay"></div>
          <div className="container">
            <div className="page-hero-content">
              <span className="hero-label">{article.category.toUpperCase()}</span>
              <h1 className="page-title">{article.title}</h1>
              <p className="page-subtitle">
                {new Date(article.date).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })} — {article.author}
              </p>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="content-section">
          <div className="container">
            <div className="blog-article-layout">
              <div>
                <div className="blog-article-body" dangerouslySetInnerHTML={{ __html: article.content }} />

                {/* Tags Section */}
                {article.tags && article.tags.length > 0 && (
                  <div className="blog-article-tags" data-testid="blog-article-tags">
                    <span className="blog-article-tags-label">
                      <i className="fas fa-tags"></i> Tag:
                    </span>
                    <div className="blog-article-tags-list">
                      {article.tags.map(tag => (
                        <Link
                          key={tag}
                          to={`/blog?tag=${tag}`}
                          className="blog-tag-pill"
                          data-testid={`article-tag-${tag}`}
                        >
                          #{tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <aside className="blog-article-sidebar">
                <div className="blog-sidebar-cta">
                  <h3>Vuoi saperne di più?</h3>
                  <p>Contatta Adele e Anna per una consulenza personalizzata sul vostro evento.</p>
                  <Link to="/frontdesk" className="btn-primary" data-testid="blog-cta-btn">
                    Richiedi una Consulenza
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </aside>
            </div>

            <div className="blog-article-nav">
              <Link to="/blog" className="btn-outline" data-testid="blog-back-btn">
                <i className="fas fa-arrow-left"></i>
                Torna al Blog
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogArticlePage;
