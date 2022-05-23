const { fetch } = require('undici');
const fs = require('fs');
const path = require('path');
const { isIPv4, isIPv6 } = require('net');

(async () => {
  const resp = await fetch('https://core.telegram.org/resources/cidr.txt');
  const lastModified = new Date(resp.headers.get('last-modified'));

  const res = (await resp.text())
    .split('\n')
    .filter(line => line.trim() !== '');

  await fs.promises.writeFile(
    path.resolve(__dirname, '../List/ip/telegram.list'),
    res.map(ip => {
      const [subnet] = ip.split('/');
      if (isIPv4(subnet)) {
        return `IP-CIDR,${ip},no-resolve`;
      }
      if (isIPv6(subnet)) {
        return `IP-CIDR6,${ip},no-resolve`;
      }
      return '';
    }).join('\n') + '\n',
    'utf-8'
  );
})();
