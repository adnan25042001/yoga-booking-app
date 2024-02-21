const mongoose = require("mongoose");

const YogaClassSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    level: {
        type: String,
        enum: ["Beginner", "Intermediate", "Advanced", "Kids"],
        required: true,
    },

    instructor: {
        type: String,
        required: true,
    },

    organization: {
        type: String,
    },

    startTime: {
        type: String,
        required: true,
    },

    endTime: {
        type: String,
        required: true,
    },

    duration: {
        type: Number, // Duration in minutes
        required: true,
    },

    frequency: {
        type: [String], // Array of strings
        enum: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
        ], // Only these values are allowed
        required: true,
    },

    healthCondition: {
        type: String,
        required: true,
    },

    style: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true,
    },

    rating: {
        type: Number,
        min: 0,
        max: 5,
    },

    image: {
        type: String, // URL of the image
        required: true,
    },
});

module.exports = mongoose.model("YogaClass", YogaClassSchema);
