import { ListaUsuarios, Pelicula, Usuario } from "../tipos/tipos";

export const EJEMPLO_USUARIO: Usuario = {
  id: 1,
  nombre: "Ejemplo Usuario",
  email: "usuario@ejemplo.com",
  edad: 30,
  informacionContacto: {
    casa: "123 Main St",
    ciudad: "Ciudad Ejemplo",
    codigoPostal: "12345",
    telefono: "555-1234"
  },
  perfil: {
    bio: "Soy un ejemplo de usuario",
    intereses: ["Programación", "Viajes"],
    sitioWeb: "https://www.ejemplo.com"
  }
};

export const USUARIOS: ListaUsuarios = {
  usuarios: [
    {
      id: 1,
      nombre: 'Juan',
      email: 'juan@ejemplo.com',
      edad: 30,
      informacionContacto: {
        casa: '123 Calle Principal',
        ciudad: 'Ciudad Ejemplo',
        codigoPostal: '12345',
        telefono: '555-1234'
      },
      perfil: {
        bio: 'Soy Juan',
        intereses: ['Programación', 'Deportes'],
        sitioWeb: 'https://www.juan.com'
      }
    },
    {
      id: 2,
      nombre: 'María',
      email: 'maria@ejemplo.com',
      edad: 25,
      informacionContacto: {
        casa: '456 Avenida Secundaria',
        ciudad: 'Otra Ciudad',
        codigoPostal: '54321',
        telefono: '555-5678'
      },
      perfil: {
        bio: 'Soy María',
        intereses: ['Música', 'Viajes']
      }
    },
    {
      id: 3,
      nombre: 'Carlos',
      email: 'carlos@ejemplo.com',
      edad: 28,
      informacionContacto: {
        casa: '789 Calle Terciaria',
        ciudad: 'Ciudad Principal',
        codigoPostal: '98765',
        telefono: '555-9876'
      },
      perfil: {
        bio: 'Soy Carlos',
        intereses: ['Fotografía', 'Cocina']
      }
    },
    {
      id: 4,
      nombre: 'Ana',
      email: 'ana@ejemplo.com',
      edad: 35,
      informacionContacto: {
        casa: '246 Calle Cuarta',
        ciudad: 'Ciudad Nueva',
        codigoPostal: '24680',
        telefono: '555-1357'
      },
      perfil: {
        bio: 'Soy Ana',
        intereses: ['Arte', 'Lectura']
      }
    },
    {
      id: 5,
      nombre: 'Pedro',
      email: 'pedro@ejemplo.com',
      edad: 40,
      informacionContacto: {
        casa: '135 Avenida Quinta',
        ciudad: 'Ciudad Antigua',
        codigoPostal: '54321',
        telefono: '555-2468'
      },
      perfil: {
        bio: 'Soy Pedro',
        intereses: ['Deportes', 'Jardinería']
      }
    },
    {
      id: 6,
      nombre: 'Laura',
      email: 'laura@ejemplo.com',
      edad: 22,
      informacionContacto: {
        casa: '369 Calle Sexta',
        ciudad: 'Otra Ciudad',
        codigoPostal: '98765',
        telefono: '555-3698'
      },
      perfil: {
        bio: 'Soy Laura',
        intereses: ['Moda', 'Viajes']
      }
    },
    {
      id: 7,
      nombre: 'David',
      email: 'david@ejemplo.com',
      edad: 33,
      informacionContacto: {
        casa: '753 Calle Séptima',
        ciudad: 'Ciudad Principal',
        codigoPostal: '12345',
        telefono: '555-7532'
      },
      perfil: {
        bio: 'Soy David',
        intereses: ['Música', 'Deportes']
      }
    },
    {
      id: 8,
      nombre: 'Elena',
      email: 'elena@ejemplo.com',
      edad: 27,
      informacionContacto: {
        casa: '852 Avenida Octava',
        ciudad: 'Otra Ciudad',
        codigoPostal: '24680',
        telefono: '555-8524'
      },
      perfil: {
        bio: 'Soy Elena',
        intereses: ['Cine', 'Lectura']
      }
    },
    {
      id: 9,
      nombre: 'Daniel',
      email: 'daniel@ejemplo.com',
      edad: 45,
      informacionContacto: {
        casa: '951 Calle Novena',
        ciudad: 'Ciudad Nueva',
        codigoPostal: '54321',
        telefono: '555-9513'
      },
      perfil: {
        bio: 'Soy Daniel',
        intereses: ['Fotografía', 'Arte']
      }
    },
    {
      id: 10,
      nombre: 'Sara',
      email: 'sara@ejemplo.com',
      edad: 31,
      informacionContacto: {
        casa: '147 Avenida Décima',
        ciudad: 'Ciudad Principal',
        codigoPostal: '98765',
        telefono: '555-1470'
      },
      perfil: {
        bio: 'Soy Sara',
        intereses: ['Cocina', 'Viajes']
      }
    },
  ]
};

export const PELICULAS: Pelicula[] = [
  {
    id: 1,
    titulo: "Titanic",
    genero: "Romance",
    duracion: "3 horas",
  },
  {
    id: 2,
    titulo: "El Padrino",
    genero: "Drama",
    duracion: "2 horas y 55 minutos",
  },
  {
    id: 3,
    titulo: "Inception",
    genero: "Ciencia ficción",
    duracion: "2 horas y 28 minutos",
  },
  {
    id: 4,
    titulo: "Forrest Gump",
    genero: "Drama",
    duracion: "2 horas y 22 minutos",
  },
  {
    id: 5,
    titulo: "The Shawshank Redemption",
    genero: "Drama",
    duracion: "2 horas y 22 minutos",
  },
];
