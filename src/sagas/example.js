// import { call, put } from 'redux-saga/effects';
// import { doAddStories, doFetchErrorStories, doAddFrontPage, doFetchErrorFrontPage } from '../store/story/actions';
// import { fetchStories, fetchFrontPage } from '../services/algoliaApi';

// function* handleFetchStories(action) {
//   const { query } = action;

//   try {
//     const result = yield call(fetchStories, query);
//     yield put(doAddStories(result.hits));
//   } catch (error) {
//     yield put(doFetchErrorStories(error));
//   }
// }

// function* handleFetchFrontPage(action) {
//   try {
//     const result = yield call(fetchFrontPage, action);
//     yield put(doAddFrontPage(result.hits));
//   } catch (error) {
//     yield put(doFetchErrorFrontPage(error));
//   }
// }

// export { handleFetchStories, handleFetchFrontPage };