export type Usuario = {
    id: string;
    nombre: string;
    email: string;
    edad: number;
};

export type AgregarUsuarioInput = Omit<Usuario, 'id'>;
export type BuscarUsuarioInput = Pick<Usuario, 'id'>;
