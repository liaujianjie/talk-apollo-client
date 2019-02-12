// "use strict";

const axios = require("axios");
const LOOPBACK_CONFIG = require("../server/config.json");

const { port: PORT, restApiRoot: API_ROOT } = LOOPBACK_CONFIG;

axios.defaults.baseURL = `http://localhost:${PORT}${API_ROOT}`;
axios.defaults.timeout = 2500;

const loginUser = user =>
  axios.post("/Users/login", user).then(response => response.data);

(async () => {
  try {
    const jianjie = await loginUser({
      username: "jianjie",
      password: "asdasd"
    });

    console.log(`Access token: ${jianjie.id}`);

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
