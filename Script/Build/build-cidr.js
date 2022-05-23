const { fetch } = require('undici');
const { promises: fsPromises } = require('fs');
const { resolve: pathResolve } = require('path');

(async () => {
  const cidr = (await (await fetch('https://raw.githubusercontent.com/misakaio/chnroutes2/master/chnroutes.txt')).text()).split('\n');

  const filteredCidr = cidr.filter(line => {
    if (line) {
      return !line.startsWith('#')
    }

    return false;
  })

  return fsPromises.writeFile(pathResolve(__dirname, '../List/ip/china_ip.list'), makeCidrList(filteredCidr), { encoding: 'utf-8' });
})();

function makeCidrList(cidr) {
  const date = new Date();

  return `############################
# Mainland China IPv4 CIDR
# Data from misaka.io (misakaio @ GitHub)
# Last Updated: ${date.toISOString()}
# Routes: ${cidr.length}
############################\n` + cidr.map(i => `IP-CIDR,${i}`).join('\n') + '\n########### END ############\n';
};
