const http = require("http");

const server = http.createServer((request, response) => {
  response.writeHead(200, {
    "Content-Type": "text/plain",
  });

  response.end("Hello World from Node.js server");
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});