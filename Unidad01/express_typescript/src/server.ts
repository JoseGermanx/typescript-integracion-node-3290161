import express, { Request, Response } from 'express';
import rutas from './rutas/rutas';

const app = express();
const port = 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
        return res.status(200).json({});
    }
    next();
});

//Rutas
app.use('/', rutas);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
