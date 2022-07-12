export interface Empresas {
  data: Data;
}

export interface Data {
  meta: Meta;
  data: Empresa[];
}

export interface Empresa {
  id: number;
  nombre: string;
  descripcion: string;
  ubicacion: string;
  enlaceTwitter: null | string;
  enlaceLinkedin: null | string;
  enlaceBehance: null | string;
  numEmpleados: null | string;
  creacion: null | string;
  userId: number;
  url: string;
  imagen: null;
  createdAt: Date;
  updatedAt: Date;
  user: User;
  ofertas?: Oferta[];
}

export interface Oferta {
  id: number;
  nombre: string;
  descripcion: string;
  ubicacion: string;
  empresaId: number;
  categoriaId: number;
  experiencia: string;
  presencialidad: string;
  region: string;
  estado: string;
  jornada: string;
  publicada: boolean;
  salarioMin: number;
  salarioMax: number;
  vacantes: number;
  requisitos: string;
  adjunto: null;
  destacado: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: number;
  email: string;
  rememberMeToken: null;
  rol: string;
  username: string;
  nombreCompleto: string;
  telefono: string;
  avatar: null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Meta {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  first_page: number;
  first_page_url: string;
  last_page_url: string;
  next_page_url: null;
  previous_page_url: null;
}
