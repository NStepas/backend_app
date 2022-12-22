const express = require("express");
const ENV = require("dotenv");

const app = express();

const node_env = require("./config/config.init")(ENV);
const router = require("./routes/index.route");
const { connectToMongoBD } = require("./database/database.config");

app.use(express.json({ limit: "50mb" }));
app.use(router);

app.listen(process.env.PORT, async () => {
  await connectToMongoBD();
  console.log(`Server is running on port: ${process.env.PORT}`);
  console.log(`Server is running in "${node_env}" mode!`);
});
