import { PokemonsStoreType } from '../store.types';

export type PokemomonReducerType = {
  pokemonReducer: PokemonsStoreType;
};

export const loadingPokemonsSelector = ({
  pokemonReducer,
}: PokemomonReducerType) => pokemonReducer.loading;

export const pokemonsSelector = ({ pokemonReducer }: PokemomonReducerType) =>
  pokemonReducer.pokemons;

export const pokemonsCountSelector = ({
  pokemonReducer,
}: PokemomonReducerType) => pokemonReducer.count;

export const pokemonsCurrentPageSelector = ({
  pokemonReducer,
}: PokemomonReducerType) => pokemonReducer.currentPage;
