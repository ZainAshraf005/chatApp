import { useSelector } from "react-redux";
import useGetMessages from "../hooks/useGetMessages";
import Message from "./Message";

const MessageContainer = () => {
  useGetMessages();
  const { message } = useSelector((store) => store.message);
  if (!message) return;
  return (
    <div className="w-full h-[32rem] overflow-hidden overflow-y-scroll p-3">
      {message?.map((e) => (
        <Message key={e._id} message={e} />
      ))}
      
    </div>
  );
};

export default MessageContainer;
