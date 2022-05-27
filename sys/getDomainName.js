

exports.getDomainName = address => {
  const parts = /\/\/([^/]+)\//.exec(address);
  if (!parts) return;
  const domainParts = parts[1].split('.');
  const domainEnd = domainParts.pop();
  const domainMain = domainParts.pop();
  return `${domainMain}.${domainEnd}`
}

  