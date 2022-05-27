var express = require('express');

const  { 
  getVideoByURL,
  getVideosBySite,
  getVideosByText,
  getVideosByURL
} = require ('../methods')

const {
  getParsers,
  getParserByDomain
} = require('../sys')

var router = express.Router();

// * getParsers
router.get('/parsers', function(req, res, next) {
  (async () => {
    const items = await getParsers();
    res.json(items);
  })();
});

// * getParserByDomain
router.get('/parsers/:domain', function(req, res, next) {
  (async () => {
    const items = await getParserByDomain(req.params.domain);
    res.json(items);
  })();
});

// * getVideoByURL
router.post('/', function(req, res, next) {
  (async () => {
    const items = await getVideoByURL(req.body.uri);
    res.json(items);
  })();
});

// * getVideosByURL
router.post('/search', function(req, res, next) {
  (async () => {
    const items = await getVideosByURL(req.body.uri);
    res.json(items);
  })();
});

// * getVideosByText
router.post('/search/param', function(req, res, next) {
  (async () => {
    const items = await getVideosByText(req.body.domain, req.body.param);
    res.json(items);
  })();
});

// * getVideosBySite
router.post('/search/site', function(req, res, next) {
  (async () => {
    const items = await getVideosBySite(
      req.body.domains, 
      { param: req.body.param });
    res.json(items);
  })();
});


module.exports = router;
