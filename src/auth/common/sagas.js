import {call, put, select, takeLatest} from 'redux-saga/effects';
import * as NavigationService from '../../components/NavigationService';
import {NavigationActions} from 'react-navigation';

import {ACTION_TYPES} from './actions';
import {
  ACTION_TYPES as APP_ACTION_TYPES,
  ACTIONS as APP_ACTIONS,
} from './../../app/common/actions';
import {ACTION_TYPES as PROPERTY_ACTIONS} from '../../property/common/actions';
import {API, AUTH_STORAGE_KEY} from './api';
import {forgetItem, setItem} from '../../common/storage';

function* login(action) {
  try {
    const state = yield select();
    const token = state.authReducer.token;

    const response = yield call(API.login, action.credentials, token);

    yield put({type: ACTION_TYPES.LOGIN_SUCCESS, payload: response.data});
    yield call(setItem, AUTH_STORAGE_KEY, response.data.api_token);

    yield put({type: PROPERTY_ACTIONS.PROPERTY_RESET});
    yield put({type: PROPERTY_ACTIONS.PROPERTY_REQUEST});

    // return NavigationService.navigate('SettingsScene');
    // return NavigationActions.goBack();
  } catch (error) {
    yield put({type: ACTION_TYPES.LOGIN_FAILURE, error});
    yield put(APP_ACTIONS.setNotification(error.message, 'error'));
  }
}

function* register(action) {
  try {
    const response = yield call(API.register, action.params);
    yield put({type: ACTION_TYPES.REGISTER_SUCCESS, payload: response.data});
    yield put(APP_ACTIONS.setNotification('Registration Success', 'success'));
    return NavigationService.goBack();
  } catch (error) {
    yield put({type: ACTION_TYPES.REGISTER_FAILURE, error});
    yield put({
      type: APP_ACTION_TYPES.SET_NOTIFICATION,
      payload: {
        message: error,
        messageType: 'error',
      },
    });
  }
}

function* logout() {
  yield call(forgetItem, AUTH_STORAGE_KEY);
}

export function* loginMonitor() {
  yield takeLatest(ACTION_TYPES.LOGIN_REQUEST, login);
}

export function* logoutMonitor() {
  yield takeLatest(ACTION_TYPES.LOGOUT, logout);
}

export function* registerMonitor() {
  yield takeLatest(ACTION_TYPES.REGISTER_REQUEST, register);
}
