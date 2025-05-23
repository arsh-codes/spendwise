import { Request, Response } from "express";

import User from "../models/User";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const JWT_SECRET_KEY: string =
    process.env.JWT_SECRET_KEY ??
    (() => {
        throw new Error("Missing JWT_SECRET_KEY environment variable");
    })();

export const login = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res
                .status(400)
                .json({ message: "Email and password are required." });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res
                .status(401)
                .json({ message: "User doesn't exist. Please sign up." });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res
                .status(401)
                .json({ message: "Invalid Password. Please try again." });
        }

        const token = jwt.sign(
            { id: user._id, email: user.email },
            JWT_SECRET_KEY,
            {
                expiresIn: "7d",
            }
        );

        return res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                email: user.email,
                name: user.name,
            },
        });
    } catch (err) {
        console.error("Login error:", err);
        return res.status(500).json({ message: "Login error", error: err });
    }
};

export const signup = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const user = new User({ name, email, password: hashedPassword });
        await user.save();

        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ message: "Server error" });
    }
};
