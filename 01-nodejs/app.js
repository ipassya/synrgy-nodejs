const http = require("http");
const fs = require("fs");
const port = 3000;

const renderHTML = (path, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write("Error: file not found.");
    } else {
      res.write(data);
    }
    res.end();
  });
};

const loadColors = (path, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  const file = fs.readFileSync(path, "utf-8");
  const colors = JSON.parse(file);
  res.write(JSON.stringify(colors));
  res.end();
};

http
  .createServer((req, res) => {
    const url = req.url;
    switch (url) {
      case "/json":
        loadColors("./data/colors.json", res);
        break;
      default:
        renderHTML("./index.html", res);
        break;
    }
  })
  .listen(port, () => {
    console.log(`Server is listening on port ${port}..`);
  });
