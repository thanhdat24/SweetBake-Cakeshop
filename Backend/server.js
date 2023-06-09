const mongoose = require("mongoose");
const dotenv = require("dotenv");

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! 🧨 Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: "./.env" });
const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

// mongoose.set("bufferCommands", false);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection successful!");
  });

// async function connect() {
//   try {
//     await mongoose.connect(DB, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       bufferCommands: false, // set to false by default
//     });
//     console.log("Connected to MongoDB");
//   } catch (err) {
//     console.error(err);
//   }
// }

// connect(); // call the connect function

// lắng nghe event kết nối
const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  console.log(`App listening on port ${port}...`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 🧨 Shutting down...");
  console.log(err);

  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
