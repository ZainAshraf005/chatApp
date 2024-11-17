import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (params) => {
    params.preventDefault();
    if (user.password !== user.confirmPassword) {
      toast.error("password don't match");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        user,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.success) {
        console.log("success true");
        toast.success(response.data.message);
        navigate("/login");
      }
      console.log(response);
    } catch (error) {
      toast.error(error.response.data.message);
    }
    setUser({
      fullName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "",
    });
  };

  return (
    <>
      <div className="bg-gray-800 relative w-full h-screen overflow-hidden flex flex-col justify-center items-center">
      <Link className="absolute inset-0 left-4 w-fit my-4" to={"/"}>
          <div className="border-gray-600 hover:bg-gray-700 rounded-lg transition-all delay-75 px-2 py-1 border ">
            return to homepage
          </div>
        </Link>
        <form
          className="w-[50%]  px-16 py-32 flex flex-col items-center gap-4"
          action=""
          onSubmit={handleSubmit}
        >
          <h1 className="text-3xl">signup</h1>
          <div className="fullName relative w-[60%] flex flex-col">
            <label htmlFor="fullName">Name</label>
            <input
              className="w-full px-3 py-1 rounded-md outline-none bg-transparent border border-gray-500"
              type="text"
              name="fullName"
              id="fullName"
              value={user.fullName}
              onChange={handleInput}
            />
          </div>
          <div className="username w-[60%] flex flex-col">
            <label htmlFor="username">username</label>
            <input
              className="w-full px-3 py-1 rounded-md outline-none bg-transparent border border-gray-500"
              type="text"
              name="username"
              id="username"
              value={user.username}
              onChange={handleInput}
            />
          </div>
          <div className="email w-[60%] flex flex-col">
            <label htmlFor="email">email</label>
            <input
              className="w-full px-3 py-1 rounded-md outline-none bg-transparent border border-gray-500"
              type="email"
              name="email"
              id="email"
              value={user.email}
              onChange={handleInput}
            />
          </div>
          <div className="password w-[60%] flex flex-col">
            <label htmlFor="password">password</label>
            <input
              className="w-full px-3 py-1 rounded-md outline-none bg-transparent border border-gray-500"
              type="password"
              name="password"
              id="password"
              value={user.password}
              onChange={handleInput}
            />
          </div>
          <div className="confirmPassword w-[60%] flex flex-col">
            <label htmlFor="confirmPassword">confirmPassword</label>
            <input
              className="w-full px-3 py-1 rounded-md outline-none bg-transparent border border-gray-500"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={user.confirmPassword}
              onChange={handleInput}
            />
          </div>
          <div className="gender w-[60%] flex gap-7">
            <label>Gender:</label>
            <div className="flex gap-2">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                checked={user.gender === "male"}
                onChange={handleInput}
              />
              <label htmlFor="male">Male</label>
            </div>
            <div className="flex gap-2">
              <input
                type="radio"
                id="female"
                onChange={handleInput}
                name="gender"
                checked={user.gender === "female"}
                value="female"
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>
          <div className="w-[60%] flex gap-2">
            <div>already have an account?</div>{" "}
            <span className="hover:underline">
              <Link to={"/login"}>login</Link>
            </span>
          </div>
          <button className="btn btn-primary w-[60%] " type="submit">
            SignUp
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
