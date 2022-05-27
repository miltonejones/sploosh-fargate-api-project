const {  getTextValue } = require('./getTextValue');
const {  findMatches } = require('./findMatches'); 
const { ParserFormConfig } = require ('../config');

exports.getPages = (parserInstance, markupText) => {
  const {inputs, node, setNodeValue} = ParserFormConfig.General;
  const pageNode = inputs.find(f => f.field === 'pageRegex');
  const pageValue = getTextValue(parserInstance, pageNode, node);
  const pageRegex = new RegExp(pageValue, 'g'); 
  const pages = !pageValue ? [] :  findMatches(pageRegex, markupText); 
  const collater = Array.from(new Set(pages.map(p => p[1])))
    .sort((a,b) => parseInt(a) > parseInt(b) ? 1 : -1);
  return collater.map (c => pages.find(p => p[1] === c));
}