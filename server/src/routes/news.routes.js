const { CreateNews, getAllNews } = require("../controllers/news.controller");
const router = require("express").Router();
router.post("/news", CreateNews);
router.get("/news", getAllNews);
module.exports = { NewsRouter: router };
