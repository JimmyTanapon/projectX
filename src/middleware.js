export const validateReq = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(500).send({
      status: "Error",
      code: 0,
      message: "ข้อมูลส่งไม่ครบ",
      cause: "unknown",
    });
  }
  if (password.length < 4) {
    return res.status(500).send({
      status: "Error",
      code: 0,
      message: "password ต้องไม่น้อยกว่า 4  ",
      cause: "unknown",
    });
  }
  next();
};
