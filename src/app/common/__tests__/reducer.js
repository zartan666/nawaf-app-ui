import appReducer from '../reducer';
import {ACTION_TYPES} from '../actions';

describe('App Component Store', () => {
  const initialState = {
    bootstrapped: false,
    booted: false,
    selectedCountry: 'Kuwait',
  };

  test('should return the initial state', () => {
    expect(appReducer(initialState, {type: 'UNDEFINED'})).toEqual(initialState);
  });

  test('app bootstraps', () => {
    expect(
      appReducer(initialState, {type: ACTION_TYPES.BOOT_SUCCESS}),
    ).toEqual({
      booted: true,
      bootstrapped: false,
      selectedCountry: 'Kuwait',
    });
  });

  test('should change country', () => {
    expect(
      appReducer(initialState, {
        type: ACTION_TYPES.COUNTRY_CHANGED,
        country: 'UAE',
      }),
    ).toEqual({
      booted: false,
      bootstrapped: false,
      selectedCountry: 'UAE',
    });
  });
});
