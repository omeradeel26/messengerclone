import axios from "axios";

export function makeGetRequest(path, data = null) {
  return new Promise(function (resolve, reject) {
    axios
      .get(path, {
        params: data
      })
      .then(
        (response) => {
          var result = response.data;
          resolve(result);
        },
        (error) => {
          reject(error);
        }
      );
  });
}

export function makePostRequest(path, data) {
  return new Promise(function (resolve, reject) {
    axios.post(path, data).then(
      (response) => {
        var result = response.data;
        resolve(result);
      },
      (error) => {
        reject(error);
      }
    );
  });
}