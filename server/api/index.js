require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { NewsRouter } = require("../src/routes/news.routes");
const { connectDB } = require("../src/db/connectDB.db");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// app.use("/api/v1/user",userRouter)
app.use("/api/v1/news", NewsRouter);

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
