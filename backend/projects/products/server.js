require("dotenv").config();

const app = require("./src/app");

const connectDB = require("./src/config/db");
const dns = require("dns");

dns.setServers(["1.1.1.1"]);
const port = 3000;

const server = async () => {
  try {
    await connectDB();
    console.log("Connected to database");
  } catch (error) {
    console.log("connectDB", error);
  }
};

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

server();
