// import packages
const path = require("path");
const routes = require("./controllers");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");

const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.info("Now listening on PORT: " + PORT));
});
