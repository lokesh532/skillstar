import {createStore,applyMiddleware} from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initialState){
    retunr createStore(
      rootReducer,
      initialState
    )
}
