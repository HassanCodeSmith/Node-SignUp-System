const express = require("express");
const { connectDB } = require("./configs/db.config");

const app = express();

/** Run Server */
const PORT = 3000;
const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
  } catch (error) {
    console.error("Error while running server: ", error);
  }
};

start();
