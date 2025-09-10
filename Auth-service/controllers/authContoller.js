import User from "../models/Auth.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
    const { name, email, password } = req.body;

    const isExists = await User.findById(req.params.id);

    if (isExists) {
        res.status(201).json({ message: " User already registered" });
    }

    const hashedPassword = bcrypt.hash(password, 10);

    const user = await User({ name, email, password: hashedPassword });

    res.status(200).json({ message: "User registered successfully " });

};

export const login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.find({ email });

    if (!user) {
        return res.status(400).json({ message: "User doesnt registered" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(500).json({ message: "Password is wrong" });
    }

    const token = jwt.sign({ user }, process.env.Token, { expiresIn: "1h" });

    res.status(200).json({ message: "User logined Successfully" });
};


export const me = async (req, res) => {
    try {
        const user = await User.find();
        res.status(200).json({ user })
    } catch (error) {
        res.status(500).json("Something went wrong")
    }
}