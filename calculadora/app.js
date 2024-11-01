// Importar módulos necesarios
const express = require("express");
const path = require("path");
const pagesRoutes = require("./routes/pages"); // Importar archivo de rutas

// Inicializar aplicación Express
const app = express();
const port = 3059; // Puerto en el que correrá el servidor

// Middleware para servir archivos estáticos desde la carpeta "public"
app.use(express.static('public'));

// Rutas principales
app.use('/', pagesRoutes);

// Redirección desde la raíz a la calculadora
app.get('/', (req, res) => {
    res.redirect('/calculadora'); // Redirige a la página de la calculadora
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://127.0.0.1:${port}`);
});
