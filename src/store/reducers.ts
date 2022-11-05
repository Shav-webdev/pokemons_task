import { combineReducers } from 'redux';
import pokemonReducer from 'store/pokemon/reducer';

const createRootReducer = () =>
  combineReducers({
    pokemonReducer,
  });

export default createRootReducer;
