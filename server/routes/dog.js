const router = require('express').Router();
const Dog = require("../models/dog");

const upload = require("../middleware/upload-photo");

// // get all dogs
router.get("/dogs", async (req, res) => {
    try {
        let dogs = await Dog.find();
        res.json({success: true, dogs: dogs})
    } catch (err) {
        res.status(500).json({success: false, message: err.message})
    }
});

// post single dog
router.post("/dogs", upload.single("photo"), async (req, res) => {
// router.post("/dogs", async (req, res) => {
    try {
        let dog = new Dog();
        dog.dogName = req.body.dogName;
        dog.dogLicNum = req.body.dogLicNum;
        dog.ownerEmail = req.body.ownerEmail;
        dog.approved = req.body.approved;
        dog.photo = req.file.location;
        // product.price = req.body.price;

        await dog.save();

        res.json({success: true, message: "New dog successfully saved."})
    } catch (err) {
        res.status(500).json({success: false, message: err.message})
    }
});



module.exports = router;