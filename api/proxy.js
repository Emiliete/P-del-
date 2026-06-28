export default async function handler(req, res) {
  try {
    const targetUrl = 'https://www.padelalborayaindoor.com/Matches/Grid.aspx';
    const response = await fetch(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
      }
    });

    if (!response.ok) {
      throw new Error(`Servidor respondió con ${response.status}`);
    }

    const html = await response.text();
    
    // Configuramos los encabezados para permitir CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.status(200).send(html);
  } catch (error) {
    console.error('Error en proxy:', error);
    res.status(500).json({ error: error.message });
  }
}
