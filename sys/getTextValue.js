const { valueOf } = require('./valueOf');


exports.getTextValue = (selectedParser, input, node) => {
    const { label, field, getNodeValue, caption } = input;
    const element = !node ? selectedParser : node(selectedParser);
  
  
    if (!field) {
      return `Could not parse ${label}`;
    }
  
    let textValue = valueOf(element[field]);
  
    if (getNodeValue) {
      try {
        textValue = getNodeValue(element);
      } catch (e) {
        textValue = e.toString();
      }
    }
   
    return textValue;
  }