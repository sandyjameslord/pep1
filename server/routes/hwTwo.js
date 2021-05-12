const router = require('express').Router();
const HWTwo = require("../models/hwTwo");

const upload = require("../middleware/upload-photo");

// // get all HWTwos
router.get("/hwTwos", async (req, res) => {
    try {
        let hwTwos = await HWTwo.find();
        res.json({success: true, hwTwos: hwTwos})
    } catch (err) {
        res.status(500).json({success: false, message: err.message})
    }
});

// post single HWTwo
router.post("/hwTwos", upload.single("photo"), async (req, res) => {

    try {
        let hwTwo = new HWTwo();
        hwTwo.studentEmail = req.body.studentEmail;
        hwTwo.numberCorrect = req.body.numberCorrect;

        await hwTwo.save();

        res.json({success: true, message: "New hwTwo successfully saved."})
    } catch (err) {
        res.status(500).json({success: false, message: err.message})
    }
});



module.exports = router;