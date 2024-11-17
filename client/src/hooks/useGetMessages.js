import axios from "axios";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../redux/messageSlice";
const useGetMessages = () => {
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((store) => store.user);
  const fetchMessages = useCallback(async () => {
    if (!selectedUser?._id) return;
    try {
      const response = await axios.get(
        `http://localhost:3000/api/message/${selectedUser?._id}`,
        { withCredentials: true }
      );
      dispatch(setMessage(response.data));
    } catch (error) {
      console.log(error);
    }
  }, [selectedUser, dispatch]);
  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);
};

export default useGetMessages;
