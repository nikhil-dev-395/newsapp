require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
/*
 * FILES
 */
const { NewsRouter } = require("../src/routes/news.routes");
const { connectDB } = require("../src/db/connectDB.db");

// add when we needed ....
// const authUser = require("../src/middleware/auth.middleware");

/*
 * CONFIG
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
/*
 * ROUTES
 */
app.use("/api/v1/user", userRouter);
app.use("/api/v1/news", NewsRouter);

app.get("/", (req, res) => {
  res.send("hi vercel");
});

/*
 * SERVER START
 */
const PORT = process.env.PORT;
(async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log("server is listening on http://localhost:" + PORT);
    });
  } catch (error) {
    console.log(error);
  }
})();

module.exports = app;
