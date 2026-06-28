// api/proxy.js

export default async function handler(req, res) {
  // Configuración de la cabecera para engañar al servidor de Padel Alboraya
  const targetUrl = 'https://www.padelalborayaindoor.com/Matches/Grid.aspx';
  
  try {
    const response = await fetch(targetUrl, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'es-ES,es;q=0.9',
        'Referer': 'https://www.padelalborayaindoor.com/',
        'Connection': 'keep-alive'
      }
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: No se pudo acceder a la web.`);
    }

    const html = await response.text();

    // CORS: Permitimos que tu web acceda a esta respuesta
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    
    // Enviamos el HTML tal cual al cliente
    res.status(200).send(html);

  } catch (error) {
    res.status(500).json({ error: "Fallo en el proxy: " + error.message });
  }
}
