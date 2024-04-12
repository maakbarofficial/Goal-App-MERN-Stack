const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { errorHandler } = require("./middlewares/errorMiddleware");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(errorHandler);

app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.get("/", (req, res) => {
  res.send("Goal App Backend On VERCEL.....!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
