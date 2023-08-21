require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const connection = require("./db")
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
const fetcherRoutes = require('./routes/fetcher')
const bodyParser = require("body-parser");
connection()
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/fetcher", fetcherRoutes);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
