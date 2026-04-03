import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useSearchParams } from 'react-router-dom';
import { blogArticles, tagCategories } from '../data/blogData';
import LazyImage from '../components/LazyImage';

const BlogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTag = searchParams.get('tag') || null;
  const [activeTag, setActiveTag] = useState(initialTag);
  const [expandedCategory, setExpandedCategory] = useState(null);

  // Get only tags that are actually used in articles
  const usedTags = useMemo(() => {
    const tagSet = new Set();
    blogArticles.forEach(a => (a.tags || []).forEach(t => tagSet.add(t)));
    return tagSet;
  }, []);

  // Filter articles by selected tag
  const filteredArticles = useMemo(() => {
    if (!activeTag) return blogArticles;
    return blogArticles.filter(a => (a.tags || []).includes(activeTag));
  }, [activeTag]);

  const handleTagClick = (tag) => {
    if (activeTag === tag) {
      setActiveTag(null);
      setSearchParams({});
    } else {
      setActiveTag(tag);
      setSearchParams({ tag });
    }
  };

  const clearFilter = () => {
    setActiveTag(null);
    setSearchParams({});
  };

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

        {/* Tag Filter Bar */}
        <section className="blog-tags-section" data-testid="blog-tags-section">
          <div className="container">
            <div className="blog-tags-header">
              <span className="blog-tags-label">FILTRA PER TAG</span>
              {activeTag && (
                <button className="blog-tags-clear" onClick={clearFilter} data-testid="blog-tags-clear">
                  <i className="fas fa-times"></i> Mostra tutti
                </button>
              )}
            </div>

            <div className="blog-tags-categories" data-testid="blog-tags-categories">
              {Object.entries(tagCategories).map(([catName, catTags]) => {
                const activeCatTags = catTags.filter(t => usedTags.has(t));
                if (activeCatTags.length === 0) return null;
                const isExpanded = expandedCategory === catName;

                return (
                  <button
                    key={catName}
                    className={`blog-tag-category-btn ${isExpanded ? 'active' : ''}`}
                    onClick={() => setExpandedCategory(isExpanded ? null : catName)}
                    data-testid={`blog-tag-cat-${catName.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {catName}
                    <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'}`}></i>
                  </button>
                );
              })}
            </div>

            {expandedCategory && tagCategories[expandedCategory] && (
              <div className="blog-tag-pills" data-testid="blog-tag-pills">
                {tagCategories[expandedCategory]
                  .filter(t => usedTags.has(t))
                  .map(tag => (
                    <button
                      key={tag}
                      className={`blog-tag-pill ${activeTag === tag ? 'active' : ''}`}
                      onClick={() => handleTagClick(tag)}
                      data-testid={`blog-tag-${tag}`}
                    >
                      #{tag}
                    </button>
                  ))}
              </div>
            )}

            {activeTag && (
              <div className="blog-active-filter" data-testid="blog-active-filter">
                <span>Filtro attivo:</span>
                <span className="blog-tag-pill active">#{activeTag}</span>
                <span className="blog-filter-count">
                  {filteredArticles.length} {filteredArticles.length === 1 ? 'articolo' : 'articoli'}
                </span>
              </div>
            )}
          </div>
        </section>

        {/* Articles Grid */}
        <section className="content-section">
          <div className="container">
            {filteredArticles.length > 0 ? (
              <div className="blog-grid" data-testid="blog-grid">
                {filteredArticles.map((article) => (
                  <Link to={`/blog/${article.slug}`} key={article.slug} className="blog-card" data-testid={`blog-card-${article.slug}`}>
                    <div className="blog-card-image">
                      <LazyImage src={article.image} alt={article.imageAlt} />
                      <span className="blog-card-category">{article.category}</span>
                    </div>
                    <div className="blog-card-content">
                      <time className="blog-card-date">{new Date(article.date).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
                      <h2 className="blog-card-title">{article.title}</h2>
                      <p className="blog-card-excerpt">{article.excerpt}</p>
                      {article.tags && (
                        <div className="blog-card-tags">
                          {article.tags.slice(0, 4).map(tag => (
                            <span key={tag} className="blog-card-tag">#{tag}</span>
                          ))}
                          {article.tags.length > 4 && (
                            <span className="blog-card-tag-more">+{article.tags.length - 4}</span>
                          )}
                        </div>
                      )}
                      <span className="blog-card-cta">
                        Leggi l'articolo <i className="fas fa-arrow-right"></i>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="blog-no-results" data-testid="blog-no-results">
                <i className="fas fa-search"></i>
                <h3>Nessun articolo trovato</h3>
                <p>Non ci sono ancora articoli con il tag <strong>#{activeTag}</strong>.</p>
                <button className="btn-outline" onClick={clearFilter}>Mostra tutti gli articoli</button>
              </div>
            )}
          </div>
        </section>

        {/* Back to Home */}
        <section className="content-section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="blog-article-nav">
              <Link to="/" className="btn-outline" data-testid="blog-back-home-btn">
                <i className="fas fa-arrow-left"></i>
                Torna al Menu Principale
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogPage;
