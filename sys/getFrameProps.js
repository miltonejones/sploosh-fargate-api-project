const {  getTextValue } = require('./getTextValue');
const { domainURL } = require ('./domainURL');
const { ParserFormConfig } = require ('../config');


exports.getFrameProps =  (parserInstance, markupText, specimen) => {
  const {inputs, node, setNodeValue} = ParserFormConfig.Embed;
  const frameNode = inputs.find(f => f.field === 'iframe');
  const sourceNode = inputs.find(f => f.field === 'src');
  const widthNode = inputs.find(f => f.field === 'width');
  const heightNode = inputs.find(f => f.field === 'height');
  const hostName = `https://${parserInstance.domain.S}`;
  const sourceValue = getTextValue(parserInstance, sourceNode, node)
  const frameValue = getTextValue(parserInstance, frameNode, node)
  const widthValue = getTextValue(parserInstance, widthNode, node)
  const heightValue = getTextValue(parserInstance, heightNode, node)
  const sourceRegex = new RegExp(sourceValue);
  const regex = new RegExp(frameValue);
  const content = regex.exec(markupText);
  if (content) { 
    
    const source = sourceRegex.exec(content[1]);

    const videoURL = !source
     ? content[1]
     : source[1];


    Object.assign(specimen, {
      src: domainURL(parserInstance, videoURL), 
      width: widthValue || 640, 
      height: heightValue || 360
    }); 
  } 
}
