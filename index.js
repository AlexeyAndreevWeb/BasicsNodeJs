import http from "node:http";

const PORT = 8080

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8",
      });
      res.end(`<h1>Home</h1> 
              <a href='/about'>About</a>`);
    } else if (req.url === "/about") {
      res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8",
      });
      res.end("<h1>About</h1>");
    } else {
      res.writeHead(404, {
        "Content-Type": "text/html; charset=utf-8",
      });
      res.end("Error page");
    }
  })
  .listen(PORT);

console.log("Сервер запущен по адресу http://localhost:8080");
