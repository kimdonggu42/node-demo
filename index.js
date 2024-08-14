const express = require("express");
const cors = require("cors");
const connectDB = require("./mongoose/connectDB");
const app = express();
const port = 8080;

connectDB(); // MongoDB 연결

app.use(cors()); // cors를 모든 라우터에 적용
app.use(express.json()); // 클라이언트 요청 body를 json으로 파싱 처리

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`서버가 실행됩니다. http://localhost:${port}`);
});
