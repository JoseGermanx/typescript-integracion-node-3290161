import express from 'express';
import controller from '../controller/controller';
import validacionUsuarioMiddleware from '../middleware/validacionUsuario';
import { UsuarioDto } from '../tipos/validador';
const rutas = express.Router();

rutas.put('/usuarios', validacionUsuarioMiddleware(UsuarioDto), controller.agregarUsuario);
rutas.get('/usuarios', controller.obtenerUsuarios);
rutas.get('/usuarios/:id', controller.obtenerUsuario);
rutas.delete('/usuarios/:id', controller.borrarUsuario);
rutas.post('/usuarios/:id', validacionUsuarioMiddleware(UsuarioDto), controller.actualizarUsuario);

export = rutas;
