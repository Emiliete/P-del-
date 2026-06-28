export default async function handler(req, res) {
  try {
    const response = await fetch('https://www.padelalborayaindoor.com/Matches/Grid.aspx', {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    const data = await response.text();
    
    // Esto enviará solo los primeros 1000 caracteres para ver si hay contenido
    res.status(200).send(data.substring(0, 1000)); 
  } catch (error) {
    res.status(500).send('Error');
  }
}
