import React from 'react';
import './style.scss';
import Loader from '../Loader';
import { useSelector } from 'react-redux';
import { IPokemon } from 'helpers/global.types';
import { loadingPokemonsSelector } from 'store/pokemon/selectors';
import PokemonInfo from '../PokemonInfo';

const Table = ({ data }: { data: IPokemon[] }) => {
  const loading = useSelector(loadingPokemonsSelector);

  if (loading) {
    return (
      <div style={{ height: 466, position: 'relative' }}>
        <Loader />
      </div>
    );
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>{'Name'}</th>
          <th>{'Avatar'}</th>
          <th>{'Weight'}</th>
          <th>{'Sprites'}</th>
          <th>{'Stats'}</th>
          <th>{'Types'}</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.length > 0 &&
          data.map((el) => {
            return (
              <tr key={el.name}>
                <td>{el.name}</td>
                {el.url && <PokemonInfo url={el.url} />}
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default Table;
