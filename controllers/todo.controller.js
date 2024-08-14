const TodoModel = require("../mongoose/models/todo.model");

const getTodos = async (req, res) => {
  try {
    const todos = await TodoModel.find(); // 별도의 조건 없이 todos 컬렉션이 모든 문서 조회
    return res.status(200).json({
      status: "success",
      message: "전체 todo 목록 불러오기 성공",
      data: {
        todos,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "전체 todo 목록 불러오기 실패",
      error: {
        code: 500,
        message: "Internal Server Error",
        error,
      },
    });
  }
};

const createTodo = async (req, res) => {
  try {
    const { task, importance } = req.body;
    await TodoModel.create({
      task,
      importance,
    });
    return res.status(200).json({
      status: "success",
      message: "새로운 todo 등록 성공",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "새로운 todo 등록 실패",
      error: {
        code: 500,
        message: "Internal Server Error",
      },
    });
  }
};

const editTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { task, importance } = req.body;
    await TodoModel.findByIdAndUpdate(id, {
      task,
      importance,
    });
    return res.status(200).json({
      status: "success",
      message: "todo 수정 성공",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "todo 수정 실패",
      error: {
        code: 500,
        message: "Internal Server Error",
      },
    });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await TodoModel.findByIdAndDelete(id);
    return res.status(200).json({
      status: "success",
      message: "todo 삭제 성공",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "todo 삭제 실패",
      error: {
        code: 500,
        message: "Internal Server Error",
      },
    });
  }
};

module.exports = {
  getTodos,
  createTodo,
  editTodo,
  deleteTodo,
};
