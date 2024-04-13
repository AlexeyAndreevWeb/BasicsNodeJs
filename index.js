import http from "node:http";

const PORT = 8080;

let userCountHome = 0;
let userCountAbout = 0;

http
  .createServer((req, res) => {
    if (req.url === "/") {
      userCountHome++;
      res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8",
      });
      res.write("<h1>Home page</h1>");
      res.write("Number of views:" + userCountHome);
      res.end("<br><a href='/about'>link to the page About</a>");
    } else if (req.url === "/about") {
      userCountAbout++;
      res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8",
      });
      res.write("<h1>About</h1>");
      res.end("Number of views:" + userCountAbout)
    } else {
      res.writeHead(404, {
        "Content-Type": "text/html; charset=utf-8",
      });
      res.write("Error page 404");
      res.end("<a href='/'>return to home page</a>")
    }
  })
  .listen(PORT);

console.log(`Сервер запущен по адресу http://localhost:${PORT}`);

