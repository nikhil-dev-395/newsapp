const mongoose = require("mongoose");

const newSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["tech", "business", "sports", "education", "entertainment"],
      default: "entertainment",
    },
  },
  { timestamps: true }
);

const News = mongoose.model("news", newSchema);

module.exports = News;
