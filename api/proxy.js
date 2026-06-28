export default async function handler(req, res) {
  try {
    // 1. Visitamos la home para obtener la sesión (cookies)
    const initialRes = await fetch('https://www.padelalborayaindoor.com/Matches/Grid.aspx');
    const cookies = initialRes.headers.get('set-cookie');

    // 2. Pedimos la página enviando la cookie obtenida
    const response = await fetch('https://www.padelalborayaindoor.com/Matches/Grid.aspx', {
      headers: {
        'Cookie': cookies || '',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
        'Referer': 'https://www.padelalborayaindoor.com/'
      }
    });

    const html = await response.text();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.status(200).send(html);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
