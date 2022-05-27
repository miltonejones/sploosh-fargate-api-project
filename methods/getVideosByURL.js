
const { getParserByURL, domainURL, getRequest, getVideos } = require ('../sys');

exports.getVideosByURL = async ( uri) => {
  const parserInstance = await getParserByURL(uri);
  const address = domainURL(parserInstance, uri); 
  const markupText = await getRequest(address); 
  return await getVideos(parserInstance, markupText, { uri });
}