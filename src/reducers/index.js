import { combineReducers } from 'redux';
import termsReducer from './termsReducer';
import favoritesReducer from './favoritesReducer';

const rootReducer =  combineReducers({
    terms: termsReducer,
    favorites: favoritesReducer
});

export default rootReducer;