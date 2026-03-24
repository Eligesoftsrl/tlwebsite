// Vercel Serverless Function - Proxy per API contatti
// Risolve il problema CORS chiamando l'API esterna lato server

export default async function handler(req, res) {
  // Solo POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const response = await fetch('https://www.tenutaleone.eliclient.it/api/nuova_richiesta', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    // Verifica se la risposta è ok
    if (response.ok) {
      const data = await response.json().catch(() => ({}));
      return res.status(200).json({ success: true, data });
    } else {
      return res.status(response.status).json({ 
        success: false, 
        error: 'Errore dal server esterno' 
      });
    }
  } catch (error) {
    console.error('Proxy error:', error);
    return res.status(500).json({ 
      success: false, 
      error: 'Errore di connessione' 
    });
  }
}
