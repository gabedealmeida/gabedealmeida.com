const express = require("express");
const app = express();
const fs = require('fs');

const host = 'localhost';
const port = 3000;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));

app.post('/endpoint', (req, res) => {
  fs.writeFileSync('endpoint.json', JSON.stringify(req.params()));
  res.status(202);
});

// Error handler
app.use((err, req, res, _next) => {
  console.log("Error");
  res.status(404).send("There has been an error. Oops!");
});

// Listener
app.listen(port, () => {
  console.log(`Todos is listening on port ${port} of ${host}!`);
});
