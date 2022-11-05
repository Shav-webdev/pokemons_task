import { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import PokemonApi from 'services/PokemonsApi';

const PokemonInfo = ({ url }: { url: string }) => {
  const dispatch = useDispatch();
  const [pokemon, setPokemon] = useState({
    sprites: {
      front_default: '',
      front_shiny: '',
      back_shiny: '',
      back_default: '',
      other: {
        home: {
          front_default: '',
        },
      },
    },
    weight: 0,
    moves: [],
    types: [],
    stats: [],
    species: {},
  });

  const id = useMemo(() => {
    const urlSplited = url.split('/');
    const id = urlSplited[urlSplited.length - 2];
    return urlSplited[urlSplited.length - 2];
  }, [url]);

  useEffect(() => {
    if (!id) return;
    (async () => {
      const { data } = await PokemonApi.getPokemonById(id);

      const { sprites, weight, moves, types, stats, species } = data;
      setPokemon({ sprites, weight, moves, types, stats, species });
    })();
  }, [id]);

  return (
    <>
      <td>
        <img
          className={'avatar'}
          src={pokemon.sprites.other?.home.front_default}
          alt=""
        />
      </td>
      <td>{pokemon.weight}</td>
      <td>
        <img src={pokemon.sprites?.front_default} alt="" />
        <img src={pokemon.sprites?.front_shiny} alt="" />
        <img src={pokemon.sprites?.back_shiny} alt="" />
        <img src={pokemon.sprites?.back_default} alt="" />
      </td>
      <td>
        <ul>
          {pokemon.stats?.map(({ stat, base_stat }: any) => {
            return (
              <li key={stat.name}>
                <span>
                  <b>{stat.name} </b>
                  {': '}
                </span>
                <span>
                  <i>{base_stat}</i>
                </span>
                {', '}
              </li>
            );
          })}
        </ul>
      </td>
      <td>
        {pokemon.types?.map(({ type }: any, i, arr) => {
          return (
            <span key={type.name}>
              <span>{type.name}</span>
              {i === arr.length - 1 ? '' : ', '}
            </span>
          );
        })}
      </td>
    </>
  );
};

export default PokemonInfo;
