import {API_URL} from '../../env';
import {fetchAPI} from '../../common/api';

function fetchCompanies(params) {
  const url = `${API_URL}/companies${params}`;
  return fetchAPI(url);
}

export const API = {
  fetchCompanies,
};
