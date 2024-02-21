const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;

// Create a user using: POST "/api/auth/signup". Doesn't require auth
router.post(
    "/signup",
    [
        body("name", "Enter a valid name").isLength({ min: 3 }),
        body("email", "Enter a valid email").isEmail(),
        body("number", "Enter a valid number").isMobilePhone(),
        body("password", "Password must be at least 6 characters").isLength({
            min: 6,
        }),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res
                .status(400)
                .json({ success: false, errors: errors.array()[0] });
        }

        const { name, email, number, password } = req.body;

        console.log(req.body);

        const salt = await bcrypt.genSalt(12);
        const secPass = await bcrypt.hash(password, salt);

        User.findOne({ email: email })
            .then((existingUser) => {
                if (existingUser) {
                    return res.status(400).json({
                        success: false,
                        error: "User already exists with this email",
                    });
                }

                User.findOne({ phoneNumber: number })
                    .then((existingUser1) => {
                        if (existingUser1) {
                            return res.status(400).json({
                                success: false,
                                error: "User already exists with this phone number",
                            });
                        }

                        const newUser = new User({
                            name: name,
                            email: email,
                            phoneNumber: number,
                            password: secPass,
                        });

                        newUser
                            .save()
                            .then(() => {
                                const data = {
                                    user: {
                                        id: newUser.id,
                                        role: newUser.role,
                                    },
                                };

                                const authtoken = jwt.sign(data, JWT_SECRET, {
                                    expiresIn: "7d",
                                });

                                res.json({
                                    success: true,
                                    authtoken: authtoken,
                                    role: newUser.role,
                                    timeStamp: new Date(),
                                });
                            })
                            .catch((error) => {
                                console.error(error);
                                res.status(500).json({
                                    success: false,
                                    error: "Failed to create user",
                                });
                            });
                    })
                    .catch((error) => {
                        console.error(error);
                        res.status(500).json({
                            success: false,
                            error: "An error occurred",
                        });
                    });
            })
            .catch((error) => {
                console.error(error);
                res.status(500).json({
                    success: false,
                    error: "An error occurred",
                });
            });
    }
);

router.post(
    "/login",
    [
        body("email", "Enter a valid email").isEmail(),
        body("number", "Enter a phone valid number").isMobilePhone(),
        body("password", "Password must be at least 6 characters").isLength({
            min: 6,
        }),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res
                .status(400)
                .json({ success: false, errors: errors.array()[0] });
        }

        const { email, number, password } = req.body;

        User.findOne({ email: email, phoneNumber: number })
            .then((existingUser) => {
                if (!existingUser) {
                    return res.status(400).json({
                        success: false,
                        error: "Wrong email, number or password!",
                    });
                }

                console.log(existingUser);

                bcrypt
                    .compare(password, existingUser.password)
                    .then((passwordCompare) => {
                        if (!passwordCompare) {
                            return res.status(400).json({
                                success: false,
                                error: "Wrong email, number or password!",
                            });
                        }

                        const data = {
                            user: {
                                id: existingUser.id,
                                role: existingUser.role,
                            },
                        };
                        const authtoken = jwt.sign(data, JWT_SECRET, {
                            expiresIn: "7d",
                        });
                        res.json({
                            success: true,
                            authtoken: authtoken,
                            role: existingUser.role,
                            timeStamp: new Date(),
                        });
                    })
                    .catch((error) => {
                        console.error(error);
                        res.status(500).json({
                            success: false,
                            error: "An error occurred",
                        });
                    });
            })
            .catch((error) => {
                console.error(error);
                res.status(500).json({
                    success: false,
                    error: "An error occurred",
                });
            });
    }
);

router.post(
    "/admin/login",
    [
        body("password", "Password must be 5 characters").isLength({
            min: 5,
            max: 5,
        }),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res
                .status(400)
                .json({ success: false, errors: errors.array() });
        }

        const { username, password } = req.body;

        const salt = await bcrypt.genSalt(12);
        const secPass = await bcrypt.hash("admin", salt);

        if (username !== "admin") {
            return res.status(400).json({
                success: false,
                error: "Wrong email or password!",
            });
        }

        bcrypt
            .compare(password, secPass)
            .then((passwordCompare) => {
                if (!passwordCompare) {
                    return res.status(400).json({
                        success: false,
                        error: "Wrong email or password!",
                    });
                }

                const data = {
                    user: {
                        id: username,
                        role: "ADMIN",
                    },
                };
                const authtoken = jwt.sign(data, JWT_SECRET, {
                    expiresIn: "7d",
                });
                res.json({
                    success: true,
                    authtoken: authtoken,
                    role: "ADMIN",
                    timeStamp: new Date(),
                });
            })
            .catch((error) => {
                console.error(error);
                res.status(500).json({
                    success: false,
                    error: "An error occurred",
                });
            });
    }
);

module.exports = router;
