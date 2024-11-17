import User from "../models/userModel.js";
import comparePassword from "../utils/comparePassword.js";
import encryptPassword from "../utils/encryptPassword.js";
import getToken from "../utils/getToken.js";

const register = async (req, res, next) => {
  try {
    const { fullName, username, password, confirmPassword, email, gender } =
      req.body;

    const fields = [
      fullName,
      username,
      password,
      confirmPassword,
      email,
      gender,
    ];

    if (!fields.every(Boolean)) {
      return res
        .status(400)
        .json({ message: "all fields are required", success: false });
    }
    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ message: "password doesn't match", success: false });
    }

    const userExists = await User.findOne({ email });
    const userNameExists = await User.findOne({ username });
    if (userExists || userNameExists) {
      return res
        .status(400)
        .json({ message: "user already exists", success: false });
    }

    const hashedPassword = await encryptPassword(password);
    let setGender;
    gender === "female" ? (setGender = "girl") : (setGender = "boy");
    const profileUrl = `https://avatar.iran.liara.run/public/${setGender}?username=${username}`;

    await User.create({
      fullName,
      username,
      email,
      password: hashedPassword,
      profilePic: profileUrl,
      gender,
    });

    res.status(201).json({
      message: "user created successfully",
      data: {
        fullName,
        username,
        email,
        profilePic,
        gender,
      },
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "all fields are required", success: false });
    }
    const userExists = await User.findOne({ email });
    if (!userExists) {
      return res
        .status(400)
        .json({ message: "invalid email or password", success: false });
    }
    const isMatch = await comparePassword(password, userExists.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ message: "invalid credentials", success: false });
    }

    const tokenData = {
      userId: userExists._id,
    };

    const token = getToken(tokenData);

    return res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
        maxAge: 24 * 60 * 60 * 1000,
      })
      .json({
        message: "logged in successfully",
        success: true,
        data: await User.findOne({ email }).select({ password: 0 }),
      });
  } catch (error) {
    next(error);
  }
};

const logout = (req, res) => {
  try {
    res
      .status(200)
      .cookie("token", "", { maxAge: 0 })
      .json({ message: "logged out successfully", success: true });
  } catch (error) {
    next(error);
  }
};

const getOtherUsers = async (req, res, next) => {
  try {
    const loggedInUserId = req.id;
    const otherUsers = await User.find({ _id: { $ne: loggedInUserId } }).select(
      { password: 0 }
    );
    res.status(200).json({ success: true, users: otherUsers });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export default { register, login, logout, getOtherUsers };
