require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  return res.json("Index");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Sevidor escultando na porta ${port}`);
});
