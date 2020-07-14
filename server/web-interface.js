const http = require("http");
const server = http.createServer((req, res) => {
  console.log("收到请求");
  res.writeHead(200, {
    "Content-Type": "text/plain",
    charset: "utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS"
  });
  res.write({ name: "xz" });
  res.end();
});
server.listen("3001");
