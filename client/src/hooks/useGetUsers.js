import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setOtherUsers } from "../redux/userSlice";

const useGetUsers = () => {
  const dispatch = useDispatch();
  const getUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/auth/getUsers",
        { withCredentials: true }
      );
      //   console.log(response);
      if (response.data.success) {
        // console.log("success true");
        dispatch(setOtherUsers(response.data.users));
      }
    } catch (error) {
      console.log(`error fetchign users: ${error}`);
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
};

export default useGetUsers;
