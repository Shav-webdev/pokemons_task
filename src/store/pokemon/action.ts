import * as types from './actionTypes';
import { IGetPokemonsRequest, IGetPokemonsResponse } from 'services/api.types';

export const getPokemonsByLimit = (payload: IGetPokemonsRequest) => {
  return {
    type: types.GET_POKEMONS_BY_LIMIT,
    payload,
  };
};
export const getPokemonsByLimitSuccess = (payload: IGetPokemonsResponse) => ({
  type: types.GET_POKEMONS_BY_LIMIT_SUCCESS,
  payload,
});

export const getPokemonsByLimitFail = (payload: any) => ({
  type: types.GET_POKEMONS_BY_LIMIT_FAILURE,
  payload,
});

export const setCurrentPage = (payload: number) => ({
  type: types.SET_CURRENT_PAGE,
  payload,
});
export const resetCurrentPage = () => ({
  type: types.RESET_CURRENT_PAGE,
});
