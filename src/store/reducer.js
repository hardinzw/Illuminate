import { combineReducers } from 'redux';

//Import custom components
import crudReducer from './crud/reducer';
import apiReducer from './api/reducer';

const rootReducer = combineReducers({
    crud: crudReducer,
    api: apiReducer
});

export default rootReducer;