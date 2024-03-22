import * as fs from 'fs';
import { BuscarUsuarioInput, Usuario } from '../tipos';
import { v4 as uuidv4 } from 'uuid';
import csvWriteStream from 'csv-write-stream';
import csvParser from 'csv-parser';

const rutaCSV = 'csv/usuarios.csv';

export const actualizarUsuarioCsv = async (usuario: Usuario): Promise<number> => {
    return new Promise(async (resolve, rejects) => {
        try {
            const usuarios = await cargarTodoslosUsuarios();
            const index = usuarios.findIndex((usuarioR: Usuario) => usuarioR.id === usuario.id);
            if (index >= 0) {
                usuarios[index] = usuario;
                const writer = csvWriteStream();
                writer.pipe(fs.createWriteStream(rutaCSV));
                usuarios.forEach((usuarioR: any) => {
                    writer.write(usuarioR);
                });
                writer.end();
                resolve(1);
            }
            resolve(0);
        } catch (error) {
            rejects((error as Error).message)
        }
    })
}

export const borrarUsuarioCsv = async (id: string): Promise<number> => {
    return new Promise(async (resolve, rejects) => {
        try {
            const usuarios = await cargarTodoslosUsuarios();
            const index = usuarios.findIndex((usuarioR: Usuario) => usuarioR.id === id);
            if (index >= 0) {
                usuarios.splice(index, 1);
                const writer = csvWriteStream();
                writer.pipe(fs.createWriteStream(rutaCSV));
                usuarios.forEach((usuarioR: any) => {
                    writer.write(usuarioR);
                });
                writer.end();
                resolve(1);
            }
            resolve(0);
        } catch (error) {
            rejects((error as Error).message)
        }
    })
}

export const cargarTodoslosUsuarios = async (): Promise<any> => {
    return new Promise((resolve, reject) => {
        const results: any[] = [];
        fs.createReadStream(rutaCSV)
            .pipe(csvParser())
            .on('data', (data: any) => {
                results.push(data);
            })
            .on('end', () => {
                resolve(results);
            })
            .on('error', (err: any) => {
                reject('Error leyendo archivo:' + rutaCSV + ' ' + err);
            });
    });
}


export const buscarUsuario = async (idUsuario: BuscarUsuarioInput): Promise<any> => {
    return new Promise(async (resolve, rejects) => {
        try {
            const usuarios = await cargarTodoslosUsuarios();
            const resultados = usuarios.filter((usuario: Usuario) => usuario.id === idUsuario.id);
            resolve(resultados);
        } catch (error) {
            rejects((error as Error).message)
        }
    })
}

export const guardarUsuario = async (datosCsv: Usuario): Promise<string> => {
    return new Promise((resolve, rejects) => {
        try {
            const writer = csvWriteStream({ sendHeaders: false, headers: Object.keys(datosCsv) });
            writer.pipe(fs.createWriteStream(rutaCSV, { flags: 'a' }));
            writer.write(datosCsv);
            writer.end();
            resolve('Usuario guardado correctamente');
        } catch (error) {
            rejects((error as Error).message)
        }
    })
}
