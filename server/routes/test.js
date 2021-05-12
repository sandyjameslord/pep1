const router = require('express').Router();
const Test = require("../models/test");

const upload = require("../middleware/upload-photo");

// // get all Tests
router.get("/tests", async (req, res) => {
    try {
        let tests = await Test.find();
        res.json({success: true, tests: tests})
    } catch (err) {
        res.status(500).json({success: false, message: err.message})
    }
});

// post single Test
router.post("/tests", upload.single("photo"), async (req, res) => {

    try {
        let test = new Test();
        test.studentEmail = req.body.studentEmail;
        test.numberCorrect = req.body.numberCorrect;

        await test.save();

        res.json({success: true, message: "New test successfully saved."})
    } catch (err) {
        res.status(500).json({success: false, message: err.message})
    }
});



module.exports = router;