"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const constantes_1 = require("./constantes/constantes");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
// https://www.linkedin.com/pulse/dto-json-payload-expressjs-validation-middleware-imran-younas/
app.get('/usuario', (req, res) => {
    res.send(constantes_1.USUARIOS);
});
app.get('/pelicula', (req, res) => {
    res.send(constantes_1.PELICULAS);
});
app.post('/usuario', (req, res) => {
    const { message } = req.body;
    if (!message) {
        return res.status(400).send('Message is required');
    }
    res.send(`Received message: ${message}`);
});
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
