import { pool } from "../database.js";

// export async function getUser() {
//   let sql = `SELECT * FROM users`;

//   try {
//     const [result] = await pool.query(sql);

//     return { code: 200, data: result };
//   } catch (error) {
//     return { code: 500, data: error.message };
//   }
// }

// export async function getUserByQuery(payload) {
//   const { username, password } = payload;
//   console.log(username, password);
//   try {
//     let sql = `select * from users where  username='${username}' and  password ='${password}' LIMIT 1`;
//     const [result] = await pool.query(sql);
//     console.log(result);
//     return { code: 200, data: result };
//   } catch (error) {
//     console.log(error);
//     return { code: 500, data: error.message };
//   }
// }

// export async function CreateUser(payload) {
//   const user = {
//     username: payload.username,
//     password: payload.password,
//     isActive: 1,
//   };

//   try {
//     let sql = `INSERT INTO users SET  ?`;
//     const [result] = await pool.query(sql, [user]);
//     console.log(result);
//     return  { code: 200, data: result };

//   } catch (error) {
//     console.log(error);
//     return { code: 400, data: error.message };

//   }
// }

// export async function UpdateUser(payload) {
//   const { username, password } = payload;

//   try {
//     let sql = `UPDATE users  SET password='${password}' WHERE username='${username}'  LIMIT 1`;
//     const [result] = await pool.query(sql);
//     console.log(result);
//     return  { code: 200, data: result };

//   } catch (error) {
//     console.log(error);
//     return { code: 400, data: error.message };

//   }

// }

export default class userService {
  
  async getUser(username, password) {
    let sql = `select * from users where  username='${username}' and  password ='${password}' LIMIT 1`;
    const [result] = await pool.query(sql);
    return result;
  }
  async createUser(user) {
    let sql = `INSERT INTO users SET  ?`;
    const [result] = await pool.query(sql, [user]);
    return result;
  }
  async editUser(username, password) {
    let sql = `UPDATE users  SET password='${password}' WHERE username='${username}'  LIMIT 1`;
    const [result] = await pool.query(sql);
    return result;
  }
}



