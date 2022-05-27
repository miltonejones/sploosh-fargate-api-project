const {  getTextValue } = require('./getTextValue');
const {  findMatches } = require('./findMatches'); 
const {  getRequest } = require('./getRequest');
const {  getVideoKeys } = require('./getVideoKeys');
const {  domainURL } = require('./domainURL');
const {  durationOf } = require('./durationOf');
const {  getPages } = require('./getPages');
const { ParserFormConfig } = require ('../config');



exports.getVideos = async (parserInstance, markupText, options = {}) => {


    const { videoList = [], pageNum = 1, pageMax = 1, param, URL} = options;
    const {inputs, node, setNodeValue} = ParserFormConfig.Search;
    const sourceNode = inputs.find(f => f.field === 'pageParser');
    const matrixNode = inputs.find(f => f.field === 'pageMatrix');
    const sourceValue = getTextValue(parserInstance, sourceNode, node)
    const matrixValue = getTextValue(parserInstance, matrixNode, node)
    const regex = new RegExp(sourceValue, 'g');
    const content = findMatches(regex, markupText); 
    const videos = content.map (c => { 
      const item = c.slice(1);
      return ((q) => {
        matrixValue.map((n,i) => Object.assign(q, {[n]: item[i]}))
        q.URL = domainURL(parserInstance, q.URL);
        return q;
      })({})
    });

    let predicate = '';
    !!param && (predicate = `like "${param}"`);
    !!URL && (predicate = `from "${URL}"`);
     
 

    const videoKeys = videos.map(v => v.URL);  
    const existingKeys = await getVideoKeys(videoKeys);

    
    videos.map(v => {
      v.existing = !!existingKeys.find(e => e.URL === v.URL); 
      v.domain = parserInstance.domain.S;
      v.Photo = domainURL(parserInstance, v.Photo)
      v.CalculatedTime = durationOf(v.Time);
      videoList.push(v);
      return v;
    });
      
    const pages = getPages(parserInstance, markupText);
    const nextPage = pages.find(f => parseInt(f[1]) > pageNum);
    
    if (!nextPage || nextPage[1] > pageMax) {
      return {
        videos: videoList,
        pages
      }
    }

    const [url, page] = nextPage;
    const nextURL = domainURL(parserInstance, url); 

    console.log ({ nextURL })

    const markup = await getRequest(nextURL); 
    return await getVideos(parserInstance, markup, {
      ...options,
      videoList,
      pageNum: page,
      pageMax
    });
 
  }
 