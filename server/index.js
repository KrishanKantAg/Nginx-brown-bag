const express = require("express");
const app = express();

app.use((req, res, next) => {
  const serverName = `Server ${process.env.SERVER_NUMBER || 'Unknown'}`; // Use environment variable to set server number
  res.setHeader('X-Server', serverName);
  next();
});

app.get("/", (req, res) => {
  res.send(`I am a endPoint112`);
});

app.listen(7777, () => {
  console.log("Listening at port 7777");
});
