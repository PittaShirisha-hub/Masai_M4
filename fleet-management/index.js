const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

const logger = require("./root/models/middlewares/logger.middleware");
const notFound = require("./root/models/middlewares/notFound.middleware");

app.use(logger);

app.use("/users", require("./root/models/routes/user.routes"));
app.use("/vehicles", require("./root/models/routes/vehicle.routes"));
app.use("/trips", require("./root/models/routes/trip.routes"));
app.use("/analytics", require("./root/models/routes/analytics.routes"));

app.use(notFound);

app.listen(process.env.PORT, () => {
  console.log("Server running on port", process.env.PORT);
});
