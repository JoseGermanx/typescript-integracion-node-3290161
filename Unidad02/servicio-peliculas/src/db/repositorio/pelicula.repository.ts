import { ResultSetHeader } from "mysql2";
import connection from "../index";
import PeliculaDB from "../models/pelicula.model";
import { Pelicula } from "../../comun/tipos";

interface IPeliculaDBRepositorio {
  guardar(pelicula: PeliculaDB): Promise<PeliculaDB>;
  obtenerTodas(parametrosBusqueda: {titulo: string}): Promise<PeliculaDB[]>;
  obtenerPorId(peliculaId: number): Promise<PeliculaDB | undefined>;
  actualizar(pelicula: PeliculaDB): Promise<number>;
  borrar(peliculaId: number): Promise<number>;
  borrarTodas(): Promise<number>;
}

class PeliculaDBRepositorio implements IPeliculaDBRepositorio {
    guardar(pelicula: Omit<Pelicula, 'id'>): Promise<PeliculaDB> {
        return new Promise((resolve, reject) => {
            connection.query<ResultSetHeader>(
              "INSERT INTO pelicula (titulo, descripcion, idioma, trama, pais, generos, anio_estreno, poster, clasificacion) VALUES(?,?,?,?,?,?,?,?,?)",
              [pelicula.titulo, pelicula.descripcion, pelicula.idioma, pelicula.trama, pelicula.pais, pelicula.generos, pelicula.anio_estreno, pelicula.poster, pelicula.clasificacion],
              (err, res) => {
                if (err) reject(err);
                else
                  this.obtenerPorId(res.insertId)
                    .then((pelicula) => resolve(pelicula!))
                    .catch(reject);
              }
            );
          });
    }

obtenerTodas(parametrosBusqueda: {titulo?: string}): Promise<PeliculaDB[]> {
    let query: string = "SELECT * FROM pelicula";
    let condicion: string = "";

  if (parametrosBusqueda?.titulo)
    condicion += `LOWER(titulo) LIKE '%${parametrosBusqueda.titulo}%'`

  if (condicion.length)
    query += " WHERE " + condicion;

  return new Promise((resolve, reject) => {
    connection.query<PeliculaDB[]>(query, (err, res) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
}
obtenerPorId(peliculaId: number): Promise<PeliculaDB> {
    return new Promise((resolve, reject) => {
        connection.query<PeliculaDB[]>(
          "SELECT * FROM pelicula WHERE id = ?",
          [peliculaId],
          (err, res) => {
            if (err) reject(err);
            else resolve(res?.[0]);
          }
        );
      });
}
actualizar(pelicula: Pelicula): Promise<number> {
    return new Promise((resolve, reject) => {
        connection.query<ResultSetHeader>(
          "UPDATE pelicula SET titulo = ?, descripcion = ?, idioma = ?, trama = ?, pais = ?, generos = ?, anio_estreno = ?, poster = ?, clasificacion = ? WHERE id = ?",
          [pelicula.titulo, pelicula.descripcion, pelicula.idioma, pelicula.trama, pelicula.pais, pelicula.generos, pelicula.anio_estreno, pelicula.poster, pelicula.clasificacion, pelicula.id],
          (err, res) => {
            if (err) reject(err);
            else resolve(res.affectedRows);
          }
        );
      });
}
borrar(peliculaId: number): Promise<number> {
    return new Promise((resolve, reject) => {
        connection.query<ResultSetHeader>(
          "DELETE FROM pelicula WHERE id = ?",
          [peliculaId],
          (err, res) => {
            if (err) reject(err);
            else resolve(res.affectedRows);
          }
        );
      });
}
borrarTodas(): Promise<number> {
    return new Promise((resolve, reject) => {
        connection.query<ResultSetHeader>("DELETE FROM Pelicula", (err, res) => {
          if (err) reject(err);
          else resolve(res.affectedRows);
        });
      });
}
}

export default new PeliculaDBRepositorio();