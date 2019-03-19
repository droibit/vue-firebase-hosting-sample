const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const app = express();
// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

app.get("/ping", (req, res) => {
  res.status(200).send("ping-success!!");
});
app.get("/ping/:id", (req, res) => {
  res.status(200).send(`ping-${req.params.id}-success!!`);
});

exports.api = functions.https.onRequest(app);
