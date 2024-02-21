const mongoose = require("mongoose");
require("dotenv").config();
const mongoURL = process.env.MONGO_URL;

const connectToMongo = () => {
    console.log("Connecting...");

    mongoose
        .connect(mongoURL)
        .then(() => console.log("Connected to mongo successfully:)"))
        .catch(() => console.log("Connection Faild!"));
};

module.exports = connectToMongo;
