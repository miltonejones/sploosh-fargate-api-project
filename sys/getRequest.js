const request = require('request');

exports.getRequest = async (uri) => new Promise(yes => {
  request(uri, function (error, response, body) {
    if (error) return yes(error); 
    yes(body);
  });
});