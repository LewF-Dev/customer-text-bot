import express from "express";
import dotenv from "dotenv";
import twilio from "twilio";

dotenv.config();
const app = express();
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Customer Text Bot API is running!");
});

app.listen(3000, () => console.log("Server running on port 3000"));