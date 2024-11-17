import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearAuthUser, clearSelectedUSer } from "../redux/userSlice";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getLogout = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/auth/logout",
        { withCredentials: true }
      );
      console.log(response);
      if (response.data.success) {
        console.log("success true");
        dispatch(clearAuthUser());
        dispatch(clearSelectedUSer());
        toast.success(response.data.message);
        navigate("/");
      }
    } catch (error) {
      console.log(`error logout: ${error}`);
      console.log(error);
    }
  };

  useEffect(() => {
    getLogout();
  }, []);

  return <></>;
};

export default Logout;
