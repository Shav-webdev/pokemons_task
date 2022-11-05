import { IPokemon } from "../helpers/global.types";

export interface ApiQueryParams {
  params?: any;
  data?: any;
  headers?: any;
}

export type ApiPrefix = string | number;

export interface IGetPokemonsRequest {
  limit?: number;
  offset: number;
}
export interface IGetPokemonsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemon[];
}
