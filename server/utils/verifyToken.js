import jwt from "jsonwebtoken";

const verifyToken = (token) => {
  try {
    if (!process.env.JWT_SECRET_KEY)
      throw new Error("missing JWT_SECRET_KEY environment variable");
    const result = jwt.verify(token, process.env.JWT_SECRET_KEY);
    return result;
  } catch (error) {
    console.log(`error generating token: ${error}`);
    throw new Error("Failed to generate token..");
  }
};

export default verifyToken;
