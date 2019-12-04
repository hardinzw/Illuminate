import { takeEvery, all, takeLatest } from 'redux-saga/effects';
import { SET_THEME } from '../constants/actionTypes';

function *watchAll() {
  yield all([
    takeEvery(SET_THEME),
  ])
}

export default watchAll;