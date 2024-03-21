export type InformacionContacto = {
    casa: string;
    ciudad: string;
    codigoPostal: string;
    telefono: string;
};

export type Perfil = {
    bio: string;
    intereses: string[];
    sitioWeb?: string;
};

export type Usuario = {
    id: number;
    nombre: string;
    email: string;
    edad: number;
    informacionContacto: InformacionContacto;
    perfil: Perfil;
};

export type ListaUsuarios = {
    usuarios: Usuario[];
};

export type Pelicula = {
    id: number,
    titulo: string;
    genero: string;
    duracion: string;
  };
