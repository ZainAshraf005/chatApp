import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../redux/userSlice";

const OtherUser = (props) => {
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((store) => store.user);
  const handleClick = (user) => {
    dispatch(setSelectedUser(user));
    
  };
  const user = props.user;
  return (
    <div
      onClick={() => handleClick(user)}
      className={`user hover:bg-gray-800 ${
        selectedUser?._id === user?._id ? "bg-gray-800" : ""
      } cursor-pointer border-gray-600 rounded-lg py-2 flex gap-2 px-1`}
    >
      <div className="avatar online w-12">
        <img src={user?.profilePic} className="rounded-full" alt="" />
      </div>
      <div className="other">
        <h1>{user?.fullName}</h1>
        <div className=" text-sm  w-56 overflow-hidden overflow-ellipsis text-nowrap">
          to apko bhi to pata hona chahye tha
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};

OtherUser.propTypes = {
  user: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    profilePic: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default OtherUser;
