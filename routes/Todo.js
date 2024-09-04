const express = require("express");
const router = express.Router();


router.get("/", (req, res)=> {
	res.status(400).send ("getting tasks using router") // it returns the list of task


})

router.post("/", (req, res)=> {
	res.status(400).send ("new task created") // to add new task to the list
})

router.patch("/", (req, res)=> {
	res.status(400).send ("updating task") // to update an existing task 
})

router.delete("/", (req, res)=> {
	res.status(400).send ("delete task") // to delete any task from the list
})

module.exports= router; // this is verry imp to export the module
