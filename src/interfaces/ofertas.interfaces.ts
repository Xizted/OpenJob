export interface Ofertas {
  data: Data;
}

export interface Data {
  meta: Meta;
  data: Oferta[];
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
  beneficios: Beneficio[];
  tecnologias: Beneficio[];
  idiomas: Beneficio[];
  empresa: Empresa;
}

export interface Beneficio {
  id: number;
  nombre: string;
  descripcion?: string;
  createdAt: Date;
  updatedAt: Date;
  bandera?: null;
}

export interface Empresa {
  id: number;
  nombre: string;
  descripcion: string;
  ubicacion: string;
  enlaceTwitter: string;
  enlaceLinkedin: string;
  enlaceBehance: string;
  numEmpleados: string;
  creacion: string;
  userId: number;
  url: string;
  imagen: null;
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
