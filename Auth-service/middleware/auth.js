import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
    const token = await req.header.authorization.split(" ")[1];

    if (!token) {
        return res.status(400).json("access denied !");
    }

    const isVerified = await jwt.compare(token, process.env.JWT);
    req.user = isVerified.decoded;

    next()

}