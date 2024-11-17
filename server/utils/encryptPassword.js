import bcrypt from "bcrypt";

const encryptPassword = async (password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
  } catch (error) {
    console.log(`error hashing password: ${error}`);
    throw new Error("Failed to encrypt password");
  }
};

export default encryptPassword;
