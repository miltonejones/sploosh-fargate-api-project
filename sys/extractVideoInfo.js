
const { getFrameProps } = require('./getFrameProps');
const { getPageProps } = require('./getPageProps');



exports.extractVideoInfo = (parserInstance, markupText, URL) => {
  const specimen = { URL, domain: parserInstance.domain.S }; 
  getPageProps(parserInstance, markupText, specimen);
  getFrameProps(parserInstance, markupText, specimen); 
  return specimen; 
}
