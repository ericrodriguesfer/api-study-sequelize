import dotenv from "dotenv";
dotenv.config();

const secret = process.env.JWT_SECRET_KEY;
const expiresIn = process.env.JWT_EXPIRES_IN;

export { secret, expiresIn };
