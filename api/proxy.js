export default async function handler(req, res) {
  const response = await fetch('https://www.padelalborayaindoor.com/Matches/Grid.aspx');
  const html = await response.text();
  
  // Vamos a ver si el HTML contiene la palabra clave que buscamos
  const contieneNombres = html.includes('participanteCuadro');
  
  res.status(200).json({
    recibido: html.substring(0, 1000), // Vemos el principio
    contieneNombres: contieneNombres
  });
}
