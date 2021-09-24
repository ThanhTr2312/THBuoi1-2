const express = require ("express");
const cors = require("cors");
const config = require("./app/config");
const setupContactRoutes = require("./app/routes/contact.routes");

const app = express();

app.use(cors({ origin: config.app.origins }));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true}));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to contact book application."});
});

setupContactRoutes(app);

// set port, listen for requests
const PORT = config.app.port;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});