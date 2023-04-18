const { createServer } = require("https");
const { parse } = require("url");
const cors = require("cors");
const next = require("next");
const fs = require("fs");

const hostname = "localhost";
const port = 3000;

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

const httpsOptions = {
  key: fs.readFileSync("C:/Users/kimud/localhost-key.pem"),
  cert: fs.readFileSync("C:/Users/kimud/localhost.pem"),
};

app.prepare().then(() => {
  createServer(httpsOptions, async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error("Error occurred handling", req.url, err);
      res.statusCode = 500;
      res.end("internal server error");
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`https://${hostname}:${port}`);
  });
});