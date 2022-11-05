import { AnyAction, CombinedState } from 'redux';
import { IPokemon } from '../helpers/global.types';
export type ICombineStateType =
  | CombinedState<{
      pokemonReducer: any;
    }>
  | undefined;

export type IStateActionType = { type: string; payload: any };

export type PokemonsStoreType = {
  loading: boolean;
  pokemons: IPokemon[];
  count: number;
  next: string | null;
  previous: string | null;
  error: object;
  currentPage: number;
  currentPokemon: object | {};
};
