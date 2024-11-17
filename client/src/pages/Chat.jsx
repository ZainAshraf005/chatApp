import Messages from "../components/Messages";
import OtherUSers from "../components/OtherUSers";
import Sidebar from "../components/Sidebar";

const Chat = () => {
  return (
    <>
      <div className="flex">
        <Sidebar/>
        <div className="w-[30%]">
          <OtherUSers />
        </div>
        <div className="w-full  relative text-white">
          <Messages />
        </div>
      </div>
    </>
  );
};

export default Chat;
