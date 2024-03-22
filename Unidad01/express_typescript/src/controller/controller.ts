import { Request, Response, NextFunction } from 'express';
import { Usuario } from '../tipos/tipos';
import { buscarUsuario, cargarTodoslosUsuarios, guardarUsuario, actualizarUsuarioCsv, borrarUsuarioCsv } from '../cvs/csv';


const obtenerUsuarios = async (req: Request, res: Response, next: NextFunction) => {
    const titulo = req.params.titulo;
    cargarTodoslosUsuarios().then((resultados) => {
        return res.status(200).json({
            usuarios: resultados
        });
    });
};

const obtenerUsuario = async (req: Request, res: Response, next: NextFunction) => {
    buscarUsuario(req.params.id).then((resultados) => {
        return res.status(200).json({
            usuarios: resultados
        });
    });
};

const actualizarUsuario = async (req: Request, res: Response, next: NextFunction) => {
    const params: Usuario = {
        id: req.params.id,
        nombre: req.body.nombre,
        edad: req.body.edad,
        email: req.body.email,
        ciudad: req.body.ciudad,
        codigoPostal: req.body.codigoPostal,
        telefono: req.body.telefono,
    };
    actualizarUsuarioCsv(params).then((filasAfectadas: number) => {
        return res.status(200).json({
            filasAfectadas
        });
    })
};

const borrarUsuario = async (req: Request, res: Response, next: NextFunction) => {
    borrarUsuarioCsv(req.params.id).then((filasAfectadas) => {
        return res.status(200).json({
            filasAfectadas
        });
    });
};

const agregarUsuario = async (req: Request, res: Response, next: NextFunction) => {
    const params: Usuario = {
        id: req.body.id,
        nombre: req.body.nombre,
        edad: req.body.edad,
        email: req.body.email,
        ciudad: req.body.ciudad,
        codigoPostal: req.body.codigoPostal,
        telefono: req.body.telefono,
    };
    
    await guardarUsuario(params).then((resultado) => {
        return res.status(200).json({
            mensaje: resultado
        });
    }, (error) => {
        return res.status(500).json({
            mensaje: error
        });
    });
};

export default { agregarUsuario, obtenerUsuarios, obtenerUsuario, actualizarUsuario, borrarUsuario};
