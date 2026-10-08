import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogArticles } from '../data/blogData';
import LazyImage from '../components/LazyImage';

const VENUE_SCHEMA = {
  "@type": ["EventVenue", "LocalBusiness"],
  "@id": "https://www.tenutaleone.it/#venue",
  "name": "Tenuta Leone",
  "description": "Dimora storica dell'Ottocento a Calvanico (Salerno) per matrimoni, comunioni, battesimi ed eventi privati. Un solo evento al giorno.",
  "url": "https://www.tenutaleone.it/",
  "telephone": "+39089957360",
  "address": { "@type": "PostalAddress", "streetAddress": "Via Roma, 19", "addressLocality": "Calvanico", "addressRegion": "SA", "postalCode": "84080", "addressCountry": "IT" },
  "geo": { "@type": "GeoCoordinates", "latitude": "40.776270", "longitude": "14.829491" }
};

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

  const pageTitle = article.seoTitle || article.title;
  const canonicalUrl = `https://www.tenutaleone.it/blog/${article.slug}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${canonicalUrl}#article`,
        "headline": article.title,
        "description": article.excerpt,
        "image": `https://www.tenutaleone.it${article.image}`,
        "datePublished": article.date,
        "dateModified": article.date,
        "inLanguage": "it-IT",
        "author": { "@type": "Organization", "name": article.author, "url": "https://www.tenutaleone.it/" },
        "publisher": { "@id": "https://www.tenutaleone.it/#venue" },
        "about": { "@id": "https://www.tenutaleone.it/#venue" },
        "mainEntityOfPage": canonicalUrl,
        "articleSection": article.category,
        "keywords": article.keywords
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tenutaleone.it/" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.tenutaleone.it/blog" },
          { "@type": "ListItem", "position": 3, "name": article.title }
        ]
      }
    ]
  };

  if (article.faqSchema) {
    structuredData["@graph"].push(article.faqSchema);
  }

  const relatedArticles = (article.related || [])
    .map(slug => blogArticles.find(a => a.slug === slug))
    .filter(Boolean);

  return (
    <>
      <Helmet>
        <title>{`${pageTitle} | Blog Tenuta Leone`}</title>
        <meta name="description" content={article.excerpt} />
        <meta name="keywords" content={article.keywords} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:site_name" content="Tenuta Leone" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`https://www.tenutaleone.it${article.image}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="article:published_time" content={article.date} />
        <meta property="article:modified_time" content={article.date} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={canonicalUrl} />
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
                <time dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })}
                </time> — {article.author}
              </p>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="content-section">
          <div className="container">
            <div className="blog-article-layout">
              <div className="blog-article-body">
                {/* Box "In breve" */}
                {article.inBrief && (
                  <div className="blog-in-brief" data-testid="blog-in-brief">
                    <h4><i className="fas fa-list-check"></i> In breve</h4>
                    <p>{article.inBrief}</p>
                  </div>
                )}

                <div dangerouslySetInnerHTML={{ __html: article.content }} />

                {/* Scheda Tenuta Leone in sintesi */}
                <div className="blog-venue-card" data-testid="blog-venue-card">
                  <h4>Tenuta Leone in sintesi</h4>
                  <p>Dimora storica dell'Ottocento a Calvanico, in provincia di Salerno, nella Valle dell'Irno. Ospita matrimoni, comunioni, battesimi ed eventi privati — <strong>un solo evento al giorno</strong>. Dispone di cappella privata, parco secolare, giardini all'italiana, agrumeto, piscina, suite per gli sposi, ludoteca interna e parcheggio privato. La cucina è interna (Brigata d'Autore, Famiglia Stasi). Capienza: fino a oltre 300 ospiti.</p>
                  <p><strong>Indirizzo:</strong> Via Roma 19, 84080 Calvanico (SA) &middot; <strong>Tel.</strong> <a href="tel:+39089957360" style={{color:'#C9A96E'}}>+39 089 957360</a></p>
                </div>

                {/* Articoli correlati */}
                {relatedArticles.length > 0 && (
                  <div className="blog-related" data-testid="blog-related">
                    <h4>Articoli correlati</h4>
                    {relatedArticles.map(r => (
                      <Link key={r.slug} to={`/blog/${r.slug}`} className="blog-related-link">
                        <i className="fas fa-arrow-right"></i> {r.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <aside className="blog-article-sidebar">
                <div className="blog-sidebar-cta">
                  <h3>Vuoi saperne di più?</h3>
                  <p>Contattaci per una consulenza personalizzata sul vostro evento.</p>
                  <Link to="/contatti" className="btn-primary" data-testid="blog-cta-btn">
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
