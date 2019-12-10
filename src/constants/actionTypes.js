//App Actions
export const SET_THEME = 'SET_THEME';

//Authentication Actions
export const alertConstants = {
  SUCCESS: 'ALERT_SUCCESS',
  ERROR: 'ALERT_ERROR',
  CLEAR: 'ALERT_CLEAR'
};

export const userConstants = {
  REGISTER_REQUEST: 'USERS_REGISTER_REQUEST',
  REGISTER_SUCCESS: 'USERS_REGISTER_SUCCESS',
  REGISTER_FAILURE: 'USERS_REGISTER_FAILURE',

  LOGIN_REQUEST: 'USERS_LOGIN_REQUEST',
  LOGIN_SUCCESS: 'USERS_LOGIN_SUCCESS',
  LOGIN_FAILURE: 'USERS_LOGIN_FAILURE',
    
  LOGOUT: 'USERS_LOGOUT',

  GETALL_REQUEST: 'USERS_GETALL_REQUEST',
  GETALL_SUCCESS: 'USERS_GETALL_SUCCESS',
  GETALL_FAILURE: 'USERS_GETALL_FAILURE',

  DELETE_REQUEST: 'USERS_DELETE_REQUEST',
  DELETE_SUCCESS: 'USERS_DELETE_SUCCESS',
  DELETE_FAILURE: 'USERS_DELETE_FAILURE'  
};

//Dashboard Actions
export const LIST = 'LIST';
export const ADD = 'ADD';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';
export const SELECT_ITEM = 'SELECT_ITEM';
export const UPDATE_SELECTED_ITEM = 'UPDATE_SELECTED_ITEM';
export const CLEAR_LIST = 'CLEAR_LIST';
export const CLEAR_SELECTED_ITEM = 'CLEAR_SELECTED_ITEM';
export const FAILURE = 'FAILURE';

//API Actions
export const API_REQUEST = 'API_REQUEST';
export const API_RESPONSE = 'API_RESPONSE';
export const API_CLEAR_STATE = 'API_CLEAR_STATE';

//Form Actions
export const ADD_CHANGE = 'form/add-change';
export const SET_UP_EDIT_FORM = 'form/edit-set-up';
export const EDIT_FORM_PENDING = 'form/edit-pending';
export const EDIT_FORM_SUCCESS = 'form/edit-success';



