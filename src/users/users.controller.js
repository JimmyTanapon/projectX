// import { CreateUser, getUser,getUserByQuery ,UpdateUser} from "./users.service.js";
import UserService from "./users.service.js";

// export const getUserControllor = async (req, res, next) => {
//   const response = await getUser();

//   return res.status(response.code).send({ message: response.data });
// };

export const getUserByQueryControllor = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const response = await new UserService().getUser(username, password);

    if (response) {
    }
    return res.status(200).send({
      status: "Success",
      code: 1,
      message: "",
      cause: "",
      result: response,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      status: "Error",
      code: 0,
      message: error.message,
      cause: "",
      result: "",
    });
  }
};

export const CreateUserControllor = async (req, res, next) => {
  try {
    const user = {
      username: req.body.username,
      password: req.body.password,
      isActive: 1,
    };

    const response = await new UserService().createUser(user);
    return res.status(200).send({
      status: "Success",
      code: 1,
      message: "บันทึกข้อมูลสำเร็จ",
      cause: "",
      result: response,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      status: "Error",
      code: 0,
      message: error.message,
      cause: "",
      result: "",
    });
  }
};


export const UserUpdateController = async (req, res, next) => {

  try{
    const {username  ,password} = req.body
    const response = await new UserService().editUser(username,password);

    return res.status(200).send({
      status: "Success",
      code: 1,
      message: "บันทึกข้อมูลสำเร็จ",
      cause: "",
      result: response,
    });
  }catch (error){
    console.log(error);
    return res.status(500).send({
      status: "Error",
      code: 0,
      message: error.message,
      cause: "",
      result: "",
    });

  }
};
