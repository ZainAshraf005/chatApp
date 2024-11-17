import bcrypt from "bcrypt";

const comparePassword = async (password, hashedPassword) => {
  try {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch
  } catch (error) {
    console.log("Error comparing password: ",error)
    throw new Error("Error verifying password")
  }
};

export default comparePassword
