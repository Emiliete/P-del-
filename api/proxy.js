export default async function handler(req, res) {
  try {
    const response = await fetch('https://www.padelalborayaindoor.com/Matches/Grid.aspx');
    const status = response.status;
    const text = await response.text();
    
    // Devolvemos el estado y un trocito del principio del HTML
    res.status(200).json({ 
      status: status, 
      longitud: text.length,
      inicio: text.substring(0, 500) 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
