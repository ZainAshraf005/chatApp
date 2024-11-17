import jwt from "jsonwebtoken";

const getToken = (tokenData) => {
  try {
    if (!process.env.JWT_SECRET_KEY)
      throw new Error("missing JWT_SECRET_KEY environment variable");
    const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });

    return token;
  } catch (error) {
    console.log(`error generating token: ${error}`);
    throw new Error("Failed to generate token..");
  }
};

export default getToken;
