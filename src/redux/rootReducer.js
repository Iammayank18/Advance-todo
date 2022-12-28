import { combineReducers } from 'redux';
import sumReducer from './reducer';

const rootReducer = combineReducers({
  sumReducer,
});

export default rootReducer;
