import Api from './api';
import { IObjectKeys } from '../helpers/global.types';

export default class PokemonApi {
  static getPokemonsByLimit(params: IObjectKeys) {
    const api = new Api('pokemon');
    return api.get('', { params });
  }

  static getPokemonById(id: string) {
    const api = new Api('pokemon');
    return api.get(id, {});
  }
}
