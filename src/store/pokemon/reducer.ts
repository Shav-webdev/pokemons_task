import * as types from './actionTypes';
import { PokemonsStoreType } from '../store.types';

const initialState: PokemonsStoreType = {
  loading: false,
  pokemons: [],
  count: 0,
  next: null,
  previous: null,
  error: {},
  currentPage: 1,
  currentPokemon: {},
};

export default function pokemonReducer(
  state = initialState,
  action: { type: string; payload: any },
) {
  switch (action.type) {
    case types.GET_POKEMONS_BY_LIMIT:
      return {
        ...state,
        loading: true,
        logError: null,
      };
    case types.GET_POKEMONS_BY_LIMIT_SUCCESS:
      const { results: pokemons, ...rest } = action.payload;
      return {
        ...state,
        loading: false,
        pokemons,
        ...rest,
      };
    case types.GET_POKEMONS_BY_LIMIT_FAILURE:
      return {
        ...state,
        logError: action.payload,
        loading: false,
      };
    case types.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case types.RESET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: 1,
      };
    default:
      return state;
  }
}
