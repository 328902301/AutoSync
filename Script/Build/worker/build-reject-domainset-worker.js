const { workerData } = require('piscina');

exports.dedupe = ({ chunk }) => {
  const outputToBeRemoved = new Set();

  for (const domainFromInput of chunk) {
    for (const domainFromFullSet of workerData) {
      if (domainFromFullSet === domainFromInput) continue;
      if (domainFromFullSet.charAt(0) !== '.') continue;

      if (
        `.${domainFromInput}` === domainFromFullSet
        || domainFromInput.endsWith(domainFromFullSet)
      ) {
        outputToBeRemoved.add(domainFromInput);
        break;
      }
    }
  }

  return outputToBeRemoved;
};

exports.whitelisted = ({ whiteList }) => {
  const outputToBeRemoved = new Set();

  for (const domain of workerData) {
    for (const white of whiteList) {
      if (domain.includes(white) || white.includes(domain)) {
        outputToBeRemoved.add(domain);
        break;
      }
    }
  }

  return outputToBeRemoved;
};

exports.dedupeKeywords = ({ keywords, suffixes }) => {
  const outputToBeRemoved = new Set();

  for (const domain of workerData) {
    for (const keyword of keywords) {
      if (domain.includes(keyword) || keyword.includes(domain)) {
        outputToBeRemoved.add(domain);
        break;
      }
    }
    for (const suffix of suffixes) {
      if (domain.endsWith(suffix)) {
        outputToBeRemoved.add(domain);
        break;
      }
    }
  }

  return outputToBeRemoved;
}
