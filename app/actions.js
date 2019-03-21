import {
} from './constants';


const defaultHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};


// //
// Action creators
// //

export function requestData() {
  return dispatch => {
    fetch("http://localhost:3000/api/path", {
      headers: defaultHeaders,
      credentials: 'same-origin',
      method: 'GET'
    })
    .then(checkStatus)
    .then(parseJSON)
    .then((response) => {
      return dispatch(receiveData(response.data));
    });
  }
}



// //
// Actions
// //

export function receiveData(data) {
  return {
    type: RECEIVE_DATA,
    payload: {
      data: data
    }
  }
}



// //
// Utilities
// //

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300 || response.status == 422) {
    return response;
  } else {
    throw response;
  }
};

function parseJSON(response) {
  return response.json();
};
