const http = require("http");

const server = http.createServer((request, response) => {
  response.write("Hello World from Node.js server");
  response.end();
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});