import {fork} from 'redux-saga/effects';
import {bootMonitor,bootstrapMonitor} from '../app/common/sagas';

export default function* rootSaga() {
  yield [
    fork(bootstrapMonitor),
    fork(bootMonitor),
  ];
}
