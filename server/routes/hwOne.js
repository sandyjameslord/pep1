const router = require('express').Router();
const HWOne = require("../models/hwOne");

const upload = require("../middleware/upload-photo");

// // get all HW1s
router.get("/hwOnes", async (req, res) => {
    try {
        let hwOnes = await HWOne.find();
        res.json({success: true, hwOnes: hwOnes})
    } catch (err) {
        res.status(500).json({success: false, message: err.message})
    }
});

// post single HW1
router.post("/hwOnes", upload.single("photo"), async (req, res) => {

    try {
        let hwOne = new HWOne();
        hwOne.studentEmail = req.body.studentEmail;
        hwOne.numberCorrect = req.body.numberCorrect;

        await hwOne.save();

        res.json({success: true, message: "New hwOne successfully saved."})
    } catch (err) {
        res.status(500).json({success: false, message: err.message})
    }
});



module.exports = router;