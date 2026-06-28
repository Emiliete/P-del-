module.exports = async (req, res) => {
  try {
    // Vamos a enviar un mensaje simple para probar que la API vive
    res.status(200).json({ 
      mensaje: "La API está funcionando correctamente",
      fecha: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({ error: "Error interno: " + error.message });
  }
};const axios = require('axios');
const cheerio = require('cheerio');

module.exports = async (req, res) => {
  try {
    const { data } = await axios.get('https://www.padellaborayaindoor.com/Matches/Grid.aspx');
    const $ = cheerio.load(data);
    
    const lista = [];
    // ... tu lógica de scraping ...
    
    res.status(200).json({ partidas: lista });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};// api/partidas.js
import axios from 'axios';
import * as cheerio from 'cheerio';

export default async function handler(req, res) {
  try {
    // 1. Descargamos el HTML de la web
    const { data } = await axios.get('https://www.padellaborayaindoor.com/Matches/Grid.aspx');
    const $ = cheerio.load(data);
    const partidas = [];

    // 2. Usamos las clases que vimos en "Screenshot from 2026-06-28 16-38-47.png"
    $('.participanteCuadro').each((i, el) => {
      partidas.push({
        nombre: $(el).text().trim(),
        perfil: $(el).attr('href')
      });
    });

    // 3. Devolvemos un JSON limpio
    res.status(200).json({ partidas });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los datos' });
  }
}
