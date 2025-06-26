import { PrismaClient } from "@prisma/client";
import express from "express";
import "dotenv/config";


const app = express();
const client = new PrismaClient();
app.use(express.json());

app.get("/", async (req, res) => {
  const data = await client.user.findMany();
  res.send(data);
});
app.post("/", async (req, res) => {
  const { username, password, firstName, middleName, lastName, email } =
    req.body;
  console.log(req.body);
  const response = await client.user.create({
    data: {
      username,
      password,
      firstName,
      middleName,
      lastName,
      email,
    },
  });
  if (!response) {
    res.send("User not created");
  }
  res.send(response);
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
