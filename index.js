require("dotenv").config();
const app = require("./src/app");

const { APP_PORT } = process.env;

const port = APP_PORT;

app
  .listen(port, () => {
    console.log(`Server is listening on ${port} http://localhost:${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });
