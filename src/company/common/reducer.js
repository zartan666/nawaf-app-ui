import {ACTION_TYPES} from './actions';

const initialState = {
  isFetching: false,
  error: null,
  nextPageUrl: undefined,
  results: [],
};

export default function companyReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ACTION_TYPES.COMPANY_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
      };

    case ACTION_TYPES.COMPANY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        nextPageUrl: action.payload.next_page_url,
      };
    case ACTION_TYPES.COMPANY_FAILURE:
      return {...state, isFetching: false, error: action.error};
    default:
      return state;
  }
}
