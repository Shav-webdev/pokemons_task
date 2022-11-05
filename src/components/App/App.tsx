import React, { useCallback, useEffect, useMemo } from 'react';
import './App.scss';
import Table from '../Table';
import Pagination from '../Pagination';
import { getPageCount } from 'helpers/global.functions';
import {
  pokemonsCountSelector,
  pokemonsCurrentPageSelector,
  pokemonsSelector,
} from 'store/pokemon/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonsByLimit, setCurrentPage } from '../../store/pokemon/action';
import { NUMBER_OF_POKEMONS_PER_PAGE } from '../../helpers/constants';

function App() {
  const dispatch = useDispatch();
  const pokemons = useSelector(pokemonsSelector);
  const pokemonsCount = useSelector(pokemonsCountSelector);
  const pokemonsCurrentPage = useSelector(pokemonsCurrentPageSelector);

  const pageCount = useMemo(() => {
    return getPageCount(pokemonsCount, NUMBER_OF_POKEMONS_PER_PAGE);
  }, [pokemonsCount]);

  const getPokemonsByOffsetAndLimit = useCallback(
    (
      limit: number = NUMBER_OF_POKEMONS_PER_PAGE,
      offset: number = pokemons?.length,
    ) => {
      dispatch(
        getPokemonsByLimit({
          offset,
          limit,
        }),
      );
    },
    [pokemons?.length, dispatch],
  );

  const handlePageClick = useCallback(
    ({ selected }: { selected: number }) => {
      const currentPage = selected + 1;
      dispatch(setCurrentPage(currentPage));
      getPokemonsByOffsetAndLimit(
        NUMBER_OF_POKEMONS_PER_PAGE,
        currentPage * NUMBER_OF_POKEMONS_PER_PAGE,
      );
    },
    [getPokemonsByOffsetAndLimit, NUMBER_OF_POKEMONS_PER_PAGE],
  );

  useEffect(() => {
    getPokemonsByOffsetAndLimit();
  }, []);

  return (
    <div className="App">
      <main className={'main'}>
        <section className="audit-log">
          <div className="container">
            <Table data={pokemons} />
            <Pagination
              pageCount={pageCount}
              handlePageClick={handlePageClick}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
