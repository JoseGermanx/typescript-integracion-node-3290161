import { v4 as uuidv4 } from 'uuid';
import { actualizarUsuarioCsv, borrarUsuarioCsv, buscarUsuario, cargarTodoslosUsuarios, guardarUsuario } from './cvs/csv';
import { Usuario, AgregarUsuarioInput, BuscarUsuarioInput } from './tipos';

const resolvers = {
  Query: {
    obtenerUsuario: async (parent: any, { id }: { id: BuscarUsuarioInput }) => {
        const resultados = await buscarUsuario(id);
        return resultados[0];
    },
    obtenerUsuarios: async () => {
        return await cargarTodoslosUsuarios();
    }
  },
  Mutation: {
    agregarUsuario: async (_parent: unknown, { input }: { input: AgregarUsuarioInput }): Promise<Usuario> => {
      const id = uuidv4();
      const usuario = { id, ...input };
      await guardarUsuario(usuario)
      return usuario;
    },
    modificarUsuario: async (parent: unknown, { input }: { input: Usuario }) => {
        const resultados = await actualizarUsuarioCsv(input);
        return resultados;
    },
    borrarUsuario: async (parent: any, { id }: { id: BuscarUsuarioInput }) => {
        const resultados = await borrarUsuarioCsv(id.id);
        return resultados;
    }
  },
};

export default resolvers;
