const express = require("express");
const {
  addTransection,
  getAllTransection,
  editTransection,
  deleteTransection
} = require("../controllers/transectionCtrl");

//router
const router = express.Router();

//routes for post
router.post("/add-transection", addTransection);

//edit route
router.post("/edit-transection", editTransection);


//delete route
router.post("/delete-transection", deleteTransection);


//get method

router.post("/get-transection", getAllTransection);

module.exports = router;
