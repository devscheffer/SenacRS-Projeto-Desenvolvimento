/** @format */

const mongoose = require("mongoose");

const pneu_schema = new mongoose.Schema({
	date: {
		type: Date,
		default: Date.now,
	},
	id_pneu: {
		type: String,
		required: true,
	},
	pressure: {
		type: Number,
		required: true,
	},
});

module.exports = mongoose.model("pneu", pneu_schema);
