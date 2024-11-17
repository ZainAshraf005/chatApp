import { useSelector } from "react-redux";

const MessageTop = () => {
  const {selectedUser} = useSelector(store=>store.user)
  return (
    <div className="top  w-full px-4 py-3 pt-2 flex items-center bg-zinc-900">
      <div className="cursor-pointer flex gap-2">
        <div className="avatar online w-12">
          <img
            src={selectedUser?.profilePic}
            className="rounded-full"
            alt=""
          />
        </div>
        <div className="flex items-center">
          <h1>{selectedUser?.fullName}</h1>
        </div>
      </div>
    </div>
  );
};

export default MessageTop;
