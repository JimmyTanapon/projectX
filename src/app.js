import express from "express";
import { pool } from "./database.js";
import indexRoute from "./index.routes.js";
import axios from "axios";

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log("Database connected successfully!");
    connection.release(); // ปล่อยการเชื่อมต่อกลับไปที่ pool
  } catch (err) {
    console.error("Database connection failed:", err);
  }
}

app.get("/a/get/", async (req, res) => {
  const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
  const response = await axios.get(url);
  return res.status(200).send(response.data);
});

app.post("/a/post/", async (req, res) => {
  const url = "https://httpbin.org/post";
  const data = { firstName: "John", secondName: "Doe", email: "jd@gmail.com" };

  const response = await axios.post(url, data);
  return res.status(200).send(response.data);
});

testConnection();

app.use("/traning/api", indexRoute);

app.listen(port, () => {
  console.log(`Server Running At ${port}`);
});
