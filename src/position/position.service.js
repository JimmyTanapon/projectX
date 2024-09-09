
import { pool } from "../database.js";


export default class positionService {
  
  async getPosition() {
    let sql = `SELECT * FROM position2`;
    const [result] = await pool.query(sql);
    
    return result;
  }

}


