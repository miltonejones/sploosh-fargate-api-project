
const { getParserByDomain } = require('./getParserByDomain');
const { getDomainName } = require('./getDomainName'); 
 

exports.getParserByURL = async (uri) => {
  const domainName = getDomainName(uri);  
  return await getParserByDomain(domainName);
}