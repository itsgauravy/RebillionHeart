// server.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const authRoutes = require("./routes/authRoutes");
app.use("/api", authRoutes);

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("🟢 MongoDB connected");
    app.listen(process.env.PORT, () => console.log(`🚀 Server on port ${process.env.PORT}`));
  })
  .catch((err) => console.error("MongoDB Error:", err));
