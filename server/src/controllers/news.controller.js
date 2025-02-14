const News = require("../models/news.models");

const CreateNews = async (req, res) => {
  try {
    const { title, content, category } = req.body;
    const createSingleNews = await News.create({ title, content, category });
    res.status(201).json({
      message: "news created",
      success: true,
      news: createSingleNews,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllNews = async (req, res) => {
  try {
    const allNews = await News.find();
    return res.status(200).json({
      message: "all news",
      data: allNews,
      success: true,
    });
  } catch (error) {
    return res.status(400).json({
      message: "error",
      error: error.message,
      success: false,
    });
  }
};

module.exports = { CreateNews, getAllNews };
