
const { API_ENDPOINT } = require('../config');
const request = require('request');


exports.getVideoKeys = (Keys) => {
  const requestOptions = {
    url:  API_ENDPOINT + '/video-keys',
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ Keys }),
  };
 
  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      const info = JSON.parse(body); 
    }
  }
 
  return new Promise(yes => {
    request(requestOptions, (error, response, body) => {
      if (!error && response.statusCode == 200) { 
        try {
          return yes(JSON.parse(body)); 
        } catch (e) {
          return yes([]);
        }
      }
      return yes({error});
    })
  })
  

}