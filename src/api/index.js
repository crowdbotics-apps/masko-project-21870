// General api to access data
import ApiConstants from './ApiConstants';

export default function api(path, params, method, token) {
  let options;
  options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(token && { Authorization: 'Token ' + token }),
    },
    method: method,
    ...(params && { body: JSON.stringify(params) }),
  };

  const url = ApiConstants.ACTIONS.BASE_URL + path;
  return callFetcher(url, options, token);
}

function callFetcher(url, options, rTokenFlag) {
  return fetch(url, options)
    .then(response => {
      const statusCode = response.status;
      const data =
        statusCode != ApiConstants.STATUS_CODES.NO_CONTENT
          ? response.json()
          : {};
      return Promise.all([statusCode, data]);
    })
    .then(function (response) {
      return { status: response[0], data: response[1], error: response[1] };
    })
    .catch(error => {
      return {
        status: ApiConstants.STATUS_CODES.BAD_REQUEST,
        data: error,
        error: error,
      };
    });
}

function checkExpireToken(response, token) {
  let status = response.status ? response.status : response[0];
  if (status == ApiConstants.STATUS_CODES.UNAUTHORIZED) {
    return false;
  } else {
    return true;
  }
}

function refreshTokenCall(rToken) {
  const url = ApiConstants.BASE_URL + ApiConstants.REFRESH_TOKEN;
  let params = {
    refresh: rToken,
  };
  let options;
  options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'post',
    ...(params && { body: JSON.stringify(params) }),
  };
  return fetch(url, options)
    .then(response => {
      const statusCode = response.status;
      const data = response.json();
      return Promise.all([statusCode, data]);
    })
    .then(function (response) {
      return { status: response[0], data: response[1], error: response[1] };
    })
    .catch(error => {
      return {
        status: ApiConstants.STATUS_CODES.BAD_REQUEST,
        data: error,
        error: error,
      };
    });
}
