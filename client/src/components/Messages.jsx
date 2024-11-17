import MessageTop from "./MessageTop";
import MessageBottom from "./MessageBottom";
import MessageContainer from "./MessageContainer";
import { useSelector } from "react-redux";
import { GoLock } from "react-icons/go";

const Messages = () => {
  const { selectedUser, authUser } = useSelector((store) => store.user);
  return (
    <>
      <div className="relative w-full">
        {selectedUser ? (
          <>
            <div className="h-screen flex flex-col justify-between">
              <MessageTop />
              <MessageContainer />
              <MessageBottom />
            </div>
          </>
        ) : (
          <div className="h-screen w-full flex flex-col gap-3 justify-center items-center">
            <div>hi,{authUser?.fullName} </div>
            <div>let&apos;s have conversation</div>
            <div className="flex items-center gap-1">
              <GoLock />
              End-to-end encrypted
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Messages;
