import isNull from 'lodash/isNull';
import {call, put, takeLatest} from 'redux-saga/effects';
import {getItem as getStoredItem, setItem} from '../../common/storage';
import {API as AUTH_API, AUTH_STORAGE_KEY} from '../../auth/common/api';
import {ACTION_TYPES as AUTH_ACTION_TYPES} from '../../auth/common/actions';
import {ACTION_TYPES} from './actions';
import {BOOTSTRAPPED} from './reducer';

function* bootstrap(action) {
  if (action.value === true) {
    yield call(setItem, BOOTSTRAPPED, 'bootstrapped');
  }
}

function* bootApp() {
  let token = yield call(getStoredItem, AUTH_STORAGE_KEY);
  let bootstrapped = yield call(getStoredItem, BOOTSTRAPPED);

  if (isNull(bootstrapped)) {
    yield put({type: ACTION_TYPES.BOOTSTRAPPED, value: false});
  } else {
    yield put({type: ACTION_TYPES.BOOTSTRAPPED, value: true});
  }

  if (!isNull(token)) {
    try {
      let response = yield call(AUTH_API.login, null, token);
      yield put({
        type: AUTH_ACTION_TYPES.LOGIN_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      yield put({type: AUTH_ACTION_TYPES.LOGIN_FAILURE, error});
    }
  }

  yield put({type: ACTION_TYPES.BOOT_SUCCESS});
}

export function* bootMonitor() {
  yield takeLatest(ACTION_TYPES.BOOT_REQUEST, bootApp);
}
export function* bootstrapMonitor() {
  yield takeLatest(ACTION_TYPES.BOOTSTRAPPED, bootstrap);
}
