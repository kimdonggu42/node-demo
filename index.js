const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./mongoose/connectDB");
const apiRouter = require("./routes/api.route");
const port = 8080;

connectDB(); // MongoDB 연결

app.use(cors());
app.use(express.json());

// 기본 경로로 /api 사용
app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`서버가 실행됩니다. http://localhost:${port}`);
});
