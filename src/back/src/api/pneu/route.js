/** @format */

const express = require("express");
const router = express.Router();
const obj = require("./model");

// [x] post
router.post("/", async (req, res) => {
	const obj_post = new obj({
		date: req.body.date,
		id_pneu: req.body.id_pneu,
		pressure: req.body.pressure,
	});

	try {
		const saved_obj_post = await obj_post.save();
		res.status(200).json(saved_obj_post);
	} catch (err) {
		res.status(400).json({ message: err });
	}
});

// [x] get_all
router.get("/", async (req, res) => {
	try {
		const obj_all = await obj.find();
		res.status(200).json(obj_all);
	} catch (err) {
		res.status(400).json({ message: err });
	}
});

// [x] get_by_id
router.get("/:id", async (req, res) => {
	try {
		const obj_id = await obj.findById(req.params.id);
		res.status(200).json(obj_id);
	} catch (err) {
		res.status(400).json({ message: err });
	}
});
// [x] delete
router.delete("/:id", async (req, res) => {
	try {
		const obj_delete = await obj.deleteOne({ _id: req.params.id });
		res.status(200).json(obj_delete);
	} catch (err) {
		res.status(400).json({ message: err });
	}
});
// [x] patch
router.patch("/:id", async (req, res) => {
	try {
		const obj_update = await obj.updateOne(
			{ _id: req.params.id },
			{
				$set: {
					date: req.body.date,
					id_pneu: req.body.id_pneu,
					pressure: req.body.pressure,
				},
			}
		);
		res.status(200).json(obj_update);
	} catch (err) {
		res.status(400).json({ message: err });
	}
});
module.exports = router;
