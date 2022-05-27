
const { ParserFormConfig } = require ('../config');
const {  getTextValue } = require('./getTextValue');
const { getRequest } = require('./getRequest');


exports.searchByText = async (parserInstance, param) => { 

  const {inputs, node, setNodeValue} = ParserFormConfig.General;
  const sourceNode = inputs.find(f => f.field === 'searchURL');
  const spaceNode = inputs.find(f => f.field === 'spaceChar');

  const sourceValue = getTextValue(parserInstance, sourceNode, node);
  const spaceValue = getTextValue(parserInstance, spaceNode, node);
  const sourceParam = !spaceValue ? param : param.replace(/\s/g, spaceValue);

  const address = sourceValue.indexOf('value') > 0
    ? sourceValue.replace('[value]', sourceParam)
    : (sourceValue + sourceParam);
  

  const markupText = await getRequest(address); 
  return markupText;
}
