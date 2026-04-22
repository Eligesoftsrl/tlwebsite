import { Link } from 'react-router-dom';
import { blogArticles } from '../data/blogData';
import LazyImage from './LazyImage';

const BlogPreview = () => {
  const latestArticle = blogArticles[0];
  if (!latestArticle) return null;

  return (
    <section className="blog-preview-section" data-testid="blog-preview">
      <div className="container">
        <div className="section-header centered">
          <span className="section-label">DAL NOSTRO BLOG</span>
          <h2>Storie e <span className="highlight">Ispirazioni</span></h2>
        </div>

        <Link to={`/blog/${latestArticle.slug}`} className="blog-preview-card" data-testid="blog-preview-card">
          <div className="blog-preview-image">
            <LazyImage src={latestArticle.image} alt={latestArticle.imageAlt} />
          </div>
          <div className="blog-preview-content">
            <span className="blog-preview-category">{latestArticle.category}</span>
            <time className="blog-preview-date">
              {new Date(latestArticle.date).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })}
            </time>
            <h3 className="blog-preview-title">{latestArticle.title}</h3>
            <p className="blog-preview-excerpt">{latestArticle.excerpt}</p>
            <span className="blog-preview-cta">
              Leggi l'articolo <i className="fas fa-arrow-right"></i>
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default BlogPreview;
