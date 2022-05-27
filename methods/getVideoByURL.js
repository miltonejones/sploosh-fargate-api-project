const { 
  getRequest,  
  extractVideoInfo,
  getParserByURL
} = require('../sys'); 

   

exports.getVideoByURL = async (uri) => { 
  const parserInstance = await getParserByURL(uri);
  const markupText = await getRequest(uri); 
  return extractVideoInfo(parserInstance, markupText, uri)
} 