import http from 'node:http';

const server = http.createServer((req, res) => {
  const { url, method } = req

  res.setHeader('Content-Type', 'application/json');

  if (url === '/types') {
    const list = ['a', 'b']
    res.end(JSON.stringify(list));
    return;
  }

  if (url === '/places') {
    res.end(JSON.stringify(['place a', 'place b']))
    return;
  }

  if (url === '/episodes') {
    res.end(JSON.stringify(['episode 1']))
    return;
  }

  res.end(`URL: ${url}; Method: ${method}`)
})

server.listen(4000);
