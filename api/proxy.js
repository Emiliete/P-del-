export default async function handler(req, res) {
  try {
    const response = await fetch('https://www.padelalborayaindoor.com/Matches/Grid.aspx', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
        'Accept': 'text/html',
        'Referer': 'https://www.padelalborayaindoor.com/'
      }
    });
    
    const html = await response.text();
    res.status(200).send(html);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
