exports.domainURL = (parserInstance, URL) => {
    const hostName = `https://${parserInstance.domain.S}`;
    return (URL.indexOf('://') > 0
    ? URL
    : `${hostName}${URL}` ).replace('&amp;', '&')
  }