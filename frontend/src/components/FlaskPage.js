import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

// Component that renders Flask content via iframe
const FlaskPage = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  
  // Build the backend URL for the current path
  const backendPath = `${BACKEND_URL}${location.pathname}${location.search}`;
  
  return (
    <div style={{ 
      position: 'fixed', 
      inset: 0, 
      background: '#112E2E',
      overflow: 'hidden'
    }}>
      {loading && (
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#BF930F',
          fontFamily: "'Playfair Display', serif",
          fontSize: '2rem',
          zIndex: 10,
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '1rem' }}>Tenuta Leone</div>
            <div style={{ fontSize: '1rem', opacity: 0.7 }}>Caricamento...</div>
          </div>
        </div>
      )}
      <iframe
        src={backendPath}
        onLoad={() => setLoading(false)}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          display: loading ? 'none' : 'block',
        }}
        title="Tenuta Leone"
        data-testid="main-content-frame"
      />
    </div>
  );
};

export default FlaskPage;
