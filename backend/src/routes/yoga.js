const express = require("express");
const router = express.Router();
const YogaClass = require("../models/YogaClass");
const fetchUser = require("../middleware/fetchUser");
const checkRole = require("../middleware/checkRole");
require("dotenv").config();

router.get("/getall", async (req, res) => {
    try {
        const yogaClasses = await YogaClass.find();
        res.json({ success: true, yogaClass: yogaClasses });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
});

router.post("/add", fetchUser, checkRole("ADMIN"), async (req, res) => {
    try {
        const {
            name,
            level,
            instructor,
            organization,
            startTime,
            endTime,
            duration,
            frequency,
            healthCondition,
            style,
            price,
            rating,
            image,
        } = req.body;

        const newYogaClass = new YogaClass({
            name,
            level,
            instructor,
            organization,
            startTime,
            endTime,
            duration,
            frequency,
            healthCondition,
            style,
            price,
            rating,
            image,
        });

        const savedYogaClass = await newYogaClass.save();
        console.log("yoga classes added");
        res.status(200).json({ success: true, yogaClass: savedYogaClass });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
});

router.get("/get/:id", async (req, res) => {
    try {
        console.log(req.params.id);

        const yogaClass = await YogaClass.findById(req.params.id);

        if (!yogaClass) {
            res.status(404).json({
                success: false,
                error: "Yoga class not found",
            });
        }

        console.log(yogaClass);

        res.status(200).json({ success: true, yogaClass: yogaClass });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Yoga class not found",
        });
    }
});

module.exports = router;
