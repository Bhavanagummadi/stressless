import User from "../models/userModel.js";
import { StatusCodes } from "http-status-codes";
import { createJWT } from "../utils/tokenUtils.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Hash the password before saving (important for security)
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(StatusCodes.CONFLICT).json({ msg: "Email already in use" });
    }

    const user = await User.create({ name, email, password: hashedPassword }); // Save hashed password

    res.status(StatusCodes.CREATED).json({ msg: "Registration successful, please login." });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "User registration failed", error: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ msg: "Invalid credentials" });
    }

    // Check if the entered password matches the stored hashed password
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ msg: "Invalid Password" });
    }

    const token = createJWT({ userId: user._id, role: user.role });
    res.cookie('token', token, { httpOnly: true });
    res.status(StatusCodes.OK).json({ msg: "Login successful" });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Login failed", error: error.message });
  }
};

