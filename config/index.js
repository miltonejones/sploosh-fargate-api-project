const ParserFormConfig = {
    General: {
      inputs: [
      {
        label: 'domain',
        field: 'domain',
        caption: 'unqualified domain name for this site'
      },
      {
        label: 'search url',
        field: 'searchURL',
        caption: 'address used to perform text-only searches using page regex'
      },
      {
        label: 'page regex',
        field: 'pageRegex',
        caption: 'find more pages when searching'
      },
      {
        label: 'space char (optional)',
        field: 'spaceChar',
        caption: 'replace spaces with this character when searching'
      },
    ]},
    Page: { 
      node: p => p.fields.M,
      setNodeValue: (instance, field, value) => Object.assign(instance, 
        {
          fields: {
            M: {
              ...instance.fields.M, 
              [field]: {
                S: value
              }
            }
          }
        }
      ),
      inputs: [
        {
          label: 'title',
          field: 'title',
          caption: 'Regex to capture video title'
        },
        {
          label: 'image',
          field: 'image',
          caption: 'Regex to capture video image'
        },
        {
          label: 'tags',
          field: 'tags',
          caption: 'Regex to capture video tags'
        },
        {
          label: 'description',
          field: 'desc',
          caption: 'Regex to capture video description'
        },
      ]
    },
    Embed: {
      node: p => p.fields.M.embed,
      setNodeValue: (instance, field, value) => {
        const dataType = isNaN(value) ? 'S' : 'N'
        const regexNode = instance.fields.M.embed.M;
        const frameProp = field === 'iframe' 
          ? regexNode.regexProp 
          : {...regexNode.regexProp, M: {...regexNode.regexProp.M, [field]: { [dataType]: value } } };
        const titleProp = field === 'iframe' 
          ? { S: value }
          : regexNode.regexTag; 
        Object.assign(instance, 
          {
            fields: {
              M: {
                ...instance.fields.M, 
                embed: {
                  ...instance.fields.M.embed,
  
                  M: {
                    // if field is TITLE change this
                    regexTag: {
                      ...instance.fields.M.embed.M.regexTag, 
                      ...titleProp
                    },
                    // ... otherwise change this
                    regexProp: {
                      ...instance.fields.M.embed.M.regexProp,
                      ...frameProp
                    },
                  },
                }
              },
  
            }
          }
        )
      },
      inputs: [
        {
          label: 'iframe',
          field: 'iframe',
          getNodeValue: o => o.M.regexTag.S,
          caption: 'Regex to capture iframe tag'
        },
        {
          label: 'width',
          field: 'width',
          getNodeValue: o => o.M.regexProp.M.width.N,
          caption: 'Video width (regex or value)'
        },
        {
          label: 'height',
          field: 'height',
          getNodeValue: o => o.M.regexProp.M.height.N,
          caption: 'Video height (regex or value)'
        },
        {
          label: 'source',
          field: 'src',
          getNodeValue: o => o.M.regexProp.M.src.S,
          caption: 'Video source URL regex'
        },
      ]
    },
    Search: {
      node: p => p,
      setNodeValue: (instance, field, value) => {
        if (field === 'pageParser') {
          Object.assign(instance, {
            pageParser: {
              S: value
            }
          })
        }
        if (field === 'pageMatrix') {
          Object.assign(instance, {
            pageMatrix: {
              M: {
                fields: {
                  L: value.split(',').map(S => ({ S }))
                }
              }
            }
          })
        }
      },
      inputs: [
        {
          label: 'page Parser',
          field: 'pageParser', 
          caption: 'Regex to capture video container elements',
          props: {
            multiline: true,
            rows: 5
          }
        },
        // {
        //   label: 'page prefix', 
        //   field: 'pagePrefix', 
        //   getNodeValue: o => Object.values(o.pageMatrix.M.prefix),
        //   caption: 'Regex to capture video container elements', 
        // },s
        {
          label: 'page matrix',
          field: 'pageMatrix', 
          getNodeValue: o => o.pageMatrix.M.fields.L.map(d => d.S),
          caption: 'Fields captured by the page regex', 
        },
      ]
    }
  }
  
const API_ENDPOINT = 'https://3bax4cg6w7.execute-api.us-east-1.amazonaws.com';
module.exports = {
  ParserFormConfig,
  API_ENDPOINT
}