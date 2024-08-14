const mongoose = require("mongoose");
require("dotenv").config();

const mongoURI = process.env.MONGODB_LOCAL;

const connectDB = async () => {
  try {
    // 콘솔에서 쿼리 내용을 확인할 수 있도록 디버그 모드 활성화
    mongoose.set("debug", true);
    // mongodb://[사용자이름]:[비밀번호]@호스트:포트번호/데이터베이스
    await mongoose.connect(mongoURI, {
      dbName: "dev", // 접속할 데이터베이스
    });
  } catch (err) {
    if (err) {
      console.error("MongoDB 연결 에러", err);
    } else {
      console.log("MongoDB 연결 성공", "localhost:27017/admin");
    }
  }
};

// MongoDB 연결 시 에러가 있을 때 발생하는 이벤트 리스너
mongoose.connection.on("error", (err) => {
  console.error("MongoDB 연결 에러", err);
});

// MongoDB 연결이 종료되었을 때 발생하는 이벤트 리스너
mongoose.connection.on("disconnected", () => {
  console.error("MongoDB 연결이 종료되어 연결을 재시도합니다.");
  connect();
});

module.exports = connectDB;
