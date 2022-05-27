
const { getParserByURL, domainURL, searchByText, getVideos } = require ('../sys');

exports.getVideosByText = async (uri, param) => {
  const parserInstance = await getParserByURL(uri);
  const text = await searchByText(parserInstance, param);   
  return await getVideos (parserInstance, text, { param });   
}