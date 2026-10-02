export type ContentType = 'movie' | 'series';

export interface Content {
  id: string;
  title: string;
  description: string;
  year: number;
  duration: string;
  genre: string[];
  imageUrl: string;
  bannerUrl: string;
  videoUrl: string;
  type: ContentType;
  rating: number;
  seasons?: number;
  cast: string[];
  director?: string;
  featured?: boolean;
}

export type Genre =
  | 'Acción'
  | 'Comedia'
  | 'Drama'
  | 'Terror'
  | 'Ciencia Ficción'
  | 'Documentales'
  | 'Thriller'
  | 'Romance'
  | 'Animación';
