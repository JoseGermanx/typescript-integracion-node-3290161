import express, { Request, Response } from 'express';
import { PELICULAS, USUARIOS } from './constantes/constantes';

const app = express();
const port = 3000;

app.use(express.json());
// https://www.linkedin.com/pulse/dto-json-payload-expressjs-validation-middleware-imran-younas/
app.get('/usuario', (req: Request, res: Response) => {
  res.send(USUARIOS);
});

app.get('/pelicula', (req: Request, res: Response) => {
    res.send(PELICULAS);
  });

app.post('/usuario', (req: Request, res: Response) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).send('Message is required');
  }
  res.send(`Received message: ${message}`);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
