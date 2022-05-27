const { valueOf } = require('./valueOf');
const { durationOf } = require('./durationOf');
const { getTextValue } = require('./getTextValue');
const { domainURL } = require('./domainURL');
const { findMatches } = require('./findMatches');
const { keyFromText } = require('./keyFromText');
const { getRequest } = require('./getRequest');
const { getDomainName } = require('./getDomainName');
const { getParserByDomain } = require('./getParserByDomain');
const { getParserByURL } = require('./getParserByURL');
const { getParsers } = require('./getParsers');
const { getFrameProps } = require('./getFrameProps');
const { getPageProps } = require('./getPageProps');
const { getPages } = require('./getPages');
const { extractVideoInfo } = require('./extractVideoInfo');
const { getVideoKeys } = require('./getVideoKeys'); 
const { getVideos } = require('./getVideos'); 
const { searchByText } = require('./searchByText'); 

   

module.exports  = { 
  domainURL,
  durationOf,
  extractVideoInfo,
  findMatches,
  getDomainName,
  getFrameProps,
  getPageProps,
  getPages,
  getParserByDomain,
  getParserByURL,
  getParsers,
  getRequest,
  getTextValue,
  getVideoKeys,
  getVideos,
  keyFromText,
  searchByText,
  valueOf,
}