
const { getRequest } = require('./getRequest'); 
const { API_ENDPOINT } = require('../config');
 

exports.getParsers = async () => { 
  const parserJSON = await getRequest(`${API_ENDPOINT}/parsers`); 
  return JSON.parse(parserJSON);
}