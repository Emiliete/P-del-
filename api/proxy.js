export default async function handler(req, res) {
  const response = await fetch('https://www.padelalborayaindoor.com/Matches/Grid.aspx');
  const html = await response.text();
  
  // Esto nos devolverá todo el texto del HTML para que lo leas
  res.status(200).send(html);
}
