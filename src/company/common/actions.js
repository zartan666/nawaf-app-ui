export const ACTION_TYPES = {
  COMPANY_REQUEST: 'COMPANY_REQUEST',
  COMPANY_SUCCESS: 'COMPANY_SUCCESS',
  COMPANY_FAILURE: 'COMPANY_FAILURE',
};

function fetchCompanies(params) {
  return {
    type: ACTION_TYPES.COMPANY_REQUEST,
    params,
  };
}

export const ACTIONS = {
  fetchCompanies,
};
