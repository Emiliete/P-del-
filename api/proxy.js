// api/proxy.js
export default async function handler(req, res) {
  try {
    const response = await fetch('https://padelalborayaindoor.com/Matches/Grid.aspx');
    const data = await response.text();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send('Error al conectar con la web de pádel');
  }
}
