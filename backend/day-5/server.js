const app = require("./src/app.js");
const connectDB = require("./src/config/db.js");
const dns = require('dns');

dns.setServers(['1.1.1.1', '8.8.8.8', '0.0.0.0']);

const Server = async () => {
  try {
    await connectDB(); // 

    app.listen(4000, () => {
      console.log("server is running on port 4000");
    });
  } catch (error) {
    console.log("Failed to start server:", error);
  }
};

Server();
