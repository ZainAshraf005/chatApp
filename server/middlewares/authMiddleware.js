import verifyToken from "../utils/verifyToken.js";

const authMiddelware = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "user not authenticated" });
    }
    const decode = verifyToken(token);
    if (!decode) {
      return res.status(401).json({ message: "invalid token" });
    }

    req.id = decode.userId;
    next();
  } catch (error) {
    console.log(`error in middleware: ${error}`)
  }
};

export default authMiddelware;
