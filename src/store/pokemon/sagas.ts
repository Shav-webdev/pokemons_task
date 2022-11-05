import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import * as types from './actionTypes';
import PokemonApi from 'services/PokemonsApi';
import { IObjectKeys } from '../../helpers/global.types';
import { IGetPokemonsResponse } from 'services/api.types';
import { getPokemonsByLimitFail, getPokemonsByLimitSuccess } from './action';

function* getPokemonsByLimitSaga({ payload }: IObjectKeys) {
  try {
    const { data }: { data: IGetPokemonsResponse } = yield call(
      PokemonApi.getPokemonsByLimit,
      payload,
    );
    yield put(getPokemonsByLimitSuccess(data));
  } catch (e) {
    yield put(getPokemonsByLimitFail(e));
  }
}

function* watchGetPokemonsByLimit() {
  yield takeLatest(types.GET_POKEMONS_BY_LIMIT, getPokemonsByLimitSaga);
}

export default function* rootSaga() {
  yield all([fork(watchGetPokemonsByLimit)]);
}
