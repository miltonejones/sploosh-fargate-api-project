const {  getTextValue } = require('./getTextValue');
const { ParserFormConfig } = require ('../config');


exports.getPageProps =  (parserInstance, markupText, specimen) => {
  const {inputs, node, setNodeValue} = ParserFormConfig.Page;
  inputs.map(input => {
    const text = getTextValue(parserInstance, input, node);
    const regex = new RegExp(text);
    const content = regex.exec(markupText);
    !!content && Object.assign(specimen, {[input.field]: content[1]}); 
  })
}