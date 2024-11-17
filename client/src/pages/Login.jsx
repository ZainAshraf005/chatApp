import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setAuthUser } from "../redux/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
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
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
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
        dispatch(setAuthUser(response?.data?.data));
        toast.success(response?.data?.message);
        navigate("/chat");
      }
      console.log(response);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
    setUser({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="bg-gray-800 w-full relative h-screen flex flex-col justify-center items-center">
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
          <h1 className="text-3xl">Login</h1>
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
          <div className="w-[60%] flex gap-2">
            <div>Don&apos;t have an account?</div>{" "}
            <span className="hover:underline">
              <Link to={"/signup"}>signup</Link>
            </span>
          </div>
          <button className="btn btn-primary w-[60%] " type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
