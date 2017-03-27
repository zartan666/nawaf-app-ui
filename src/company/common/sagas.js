import {call, put, select, takeLatest} from 'redux-saga/effects';
import {ACTION_TYPES} from './actions';
import {API} from './api';

export function* fetchCompanies(action) {
  try {
    const response = yield call(API.fetchProperties, action.params);
    yield put({
      type: ACTION_TYPES.COMPANY_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({type: ACTION_TYPES.COMPANY_FAILURE, error});
  }
}

export function* companyMonitor() {
  yield takeLatest(ACTION_TYPES.COMPANY_REQUEST, fetchCompanies);
}
