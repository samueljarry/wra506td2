/// <reference types="vite/client" />

declare type Movie = {
  title: string;
  duration: number;
  id: number;
  releaseDate: Date;
  description: string;
  actor: Actor[];
  category: {
    name: string;
  };
}

declare type Actor = {
  id: number;
  lastName: string;
  firstName: string;
  movies: Movie[];
  nationality: {
    name: string;
  }
}

declare type Category = {
  id: number;
  name: string;
  movies: Movie[];
}

declare type UndefinedObject = { [key: string]: undefined | { [key: string]: undefined } }