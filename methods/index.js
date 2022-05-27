const { getVideoByURL } = require ('./getVideoByURL');
const { getVideosByURL } = require ('./getVideosByURL');
const { getVideosBySite } = require ('./getVideosBySite');
const { getVideosByText } = require ('./getVideosByText');


module.exports = { 
  getVideoByURL,
  getVideosBySite,
  getVideosByText,
  getVideosByURL
};