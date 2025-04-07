require("dotenv").config();
const app = require("./app");
const connectDB = require("./db/database");

const port = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server started at port ${port}...`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
