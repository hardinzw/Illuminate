import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

//Import custom components
import crudReducer from './crud/reducer';
import apiReducer from './api/reducer';

const rootReducer = combineReducers({
    crud: crudReducer,
    api: apiReducer,
    form: formReducer
});

export default rootReducer;