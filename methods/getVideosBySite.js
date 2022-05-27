
const { getParserByURL, domainURL, searchByText, getVideos } = require ('../sys');

const getVideosBySite = async (uris, options) => {


  const { videoList = [], pageMax = 1, param, length } = options; 
  const size = length || uris.length;

  if (!uris.length) { 
    return videoList;
  };

  const parserInstance = await getParserByURL(uris.shift()); 

  const markupText = await searchByText(parserInstance, param);
  const q = await getVideos(parserInstance, markupText, { pageMax, param });
  return await getVideosBySite (uris, {
    ...options,
    length: size,
    videoList: videoList.concat(q.videos)
  });  
}

exports.getVideosBySite = getVideosBySite; 