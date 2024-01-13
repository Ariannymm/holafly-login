const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

require("dotenv").config();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3100;


app.use('/api/login', require("./routes/login"));
app.use('/api/home', require("./routes/home"));
app.use('/api/refresh-token', require("./routes/refreshToken"));
app.use('/api/todos', require("./routes/todos"));
app.use('/api/user', require("./routes/user"));

app.get("/", (req, res) => {
    res.send("Hello World")
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});

module.exports = app;