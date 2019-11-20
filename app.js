const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send(
    `<h1> Welcome! </h1> <hr> <p><a href="/rysowanko"> Click to go to Rysowanko </a></p>`
  );
});

app.get("/rysowanko", (req, res) => {
  res.sendFile(`${__dirname}/public/static/rysowanko.html`);
});

app.listen(PORT, () => {
  console.log(__dirname);
  console.log(`App is running on port: ${PORT}`);
});
