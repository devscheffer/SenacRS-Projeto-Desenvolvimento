/** @format */

const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

// middleware

app.use(express.json());

// route

app.use("/pneu", require("./api/pneu/route"));

// database

mongoose.connect(process.env.db_connection, () => {
	console.log("connected to mongo");
});

//server
app.listen(3000, () => {
	let port = 3000;
	console.log(`Server started on port ${port}`);
	console.log(`http://localhost:${port}/`);
});
