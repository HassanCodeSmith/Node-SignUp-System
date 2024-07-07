const express = require("express");
const { connectDB } = require("./configs/db.config");

const app = express();

/** Middlewares */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/** Test Route */
app.get("/", (req, res) => {
  res.send("<h1>Server is running</h1>");
});

/** Import Routes */
const { userRouter } = require("./routes/user.routes");

/** Define API Routes */
app.use("/api/v1/user", userRouter);

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
