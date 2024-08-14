const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema(
  {
    task: {
      type: String,
      required: true,
    },
    importance: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // createdAt과 updatedAt을 생성
  }
);

// 스키마를 사용해서 모델 생성
const TodoModel = mongoose.model("Todo", todoSchema);

module.exports = TodoModel;
