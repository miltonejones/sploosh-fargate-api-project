
const { getRequest } = require('./getRequest'); 
const { API_ENDPOINT } = require('../config');
 

exports.getParserByDomain = async (domainName) => {  
  const parserJSON = await getRequest(`${API_ENDPOINT}/parsers/${domainName}`); 
  console.log ({ parserJSON })
  return JSON.parse(parserJSON);
}