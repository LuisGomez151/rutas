const express = require("express");
const router = express.Router();
const path = require("path");

// Ruta para la página de la calculadora
router.get('/calculadora', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/calculadora.html'));
});

// Ruta para la página del generador de QR
router.get('/qr', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/generadorQR.html'));
});

module.exports = router;
