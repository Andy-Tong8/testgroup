const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors(), express.json(), express.urlencoded({ extended: true }));

//load models
require("./models/projectmanager-models");
require("./config/projectmanager-config");
require("./routes/projectmanager-routes")(app);

app.listen(8000);
