export default async function handler(req, res) {
  try {
    const response = await fetch('https://www.padelalborayaindoor.com/Matches/Grid.aspx', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Referer': 'https://www.padelalborayaindoor.com/'
      }
    });

    if (!response.ok) throw new Error('Error en la respuesta del servidor');
    
    const data = await response.text();
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send('Error al conectar: ' + error.message);
  }
}
