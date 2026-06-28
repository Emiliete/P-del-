<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Visor de Partidas</title>
    <style>
        body { font-family: sans-serif; background: #f4f4f9; padding: 20px; }
        table { width: 100%; border-collapse: collapse; background: white; margin-top: 20px; }
        th, td { border: 1px solid #ddd; padding: 12px; text-align: center; }
        th { background-color: #2e7d32; color: white; }
    </style>
</head>
<body>

    <h1>Partidas Programadas</h1>
    <div id="tabla-resultado">Cargando datos a través de proxy...</div>

    <script>
        async function procesar() {
            try {
                // Usamos un proxy público de confianza (corsproxy.io)
                const targetUrl = 'https://www.padelalborayaindoor.com/Matches/Grid.aspx';
                const response = await fetch('https://corsproxy.io/?' + encodeURIComponent(targetUrl));
                
                if (!response.ok) throw new Error('Error al conectar con la web');
                
                const htmlTexto = await response.text();
                const parser = new DOMParser();
                const doc = parser.parseFromString(htmlTexto, 'text/html');

                const bloques = doc.querySelectorAll('.gridviewestilocabecera');
                let html = `<table><tr><th>Hora</th><th>Estado</th></tr>`;
                
                bloques.forEach(cabecera => {
                    const texto = cabecera.innerText;
                    const horaMatch = texto.match(/(\d{1,2}:\d{2})/);
                    if (horaMatch) {
                        html += `<tr><td>${horaMatch[0]}</td><td>Disponible</td></tr>`;
                    }
                });

                document.getElementById('tabla-resultado').innerHTML = html + `</table>`;

            } catch (err) {
                document.getElementById('tabla-resultado').innerHTML = "Error: " + err.message + ". Intenta recargar.";
            }
        }
        procesar();
    </script>
</body>
</html>
