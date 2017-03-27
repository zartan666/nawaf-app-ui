import {fork} from 'redux-saga/effects';
import {bootMonitor, bootstrapMonitor} from '../app/common/sagas';
import {companyMonitor} from '../company/common/sagas';

export default function* rootSaga() {
  yield [fork(bootstrapMonitor), fork(bootMonitor)];
  yield [fork(companyMonitor)];
}
