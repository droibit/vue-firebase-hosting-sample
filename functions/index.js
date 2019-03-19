const functions = require("firebase-functions");
const express = require("express");

const app = express();

app.get("/test", (req, res) => {
  res.status(200).send("test-success!!");
});
app.get("/test/:id", (req, res) => {
  res.status(200).send(`test-${req.params.id}-success!!`);
});

exports.api = functions.https.onRequest(app);
