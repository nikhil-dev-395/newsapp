const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("hiii");
});

module.exports = { NewsRouter: router };
