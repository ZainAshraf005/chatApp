import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../redux/messageSlice";

const MessageBottom = () => {
  const [messageBox, setMessageBox] = useState("");
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((store) => store.user);
  const { message } = useSelector((store) => store.message);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3000/api/message/send/${selectedUser?._id}`,
        { message: messageBox },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      dispatch(setMessage([...message, response.data.data]));
      setMessageBox("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="  w-full flex items-center gap-4 py-4 pb-3 px-3 bg-zinc-900 ">
      <div className="emoji cursor-pointer btn-square btn-sm flex justify-center items-center bg-gray-700 rounded-lg ">
        😊
      </div>
      <div className="emoji cursor-pointer btn-square btn-sm flex justify-center items-center bg-gray-700 rounded-lg ">
        📎
      </div>
      <div className="w-full">
        <form onSubmit={handleSubmit} className="flex items-center" action="">
          <input
            type="text"
            autoComplete="off"
            className="bg-transparent py-1 outline-none  w-full"
            placeholder="send message.."
            name="send"
            id="send"
            value={messageBox}
            onChange={(e) => setMessageBox(e.target.value)}
          />

          <button
            type="submit"
            className="emoji cursor-pointer btn btn-square btn-sm flex justify-center items-center bg-gray-700 rounded-lg "
          >
            ▶
          </button>
        </form>
      </div>
    </div>
  );
};

export default MessageBottom;
