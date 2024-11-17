import { useSelector } from "react-redux";
import OtherUser from "./OtherUser";
import useGetUsers from "../hooks/useGetUsers";
import PropTypes from "prop-types";

const Users = ({ search }) => {
  useGetUsers();
  const { otherUsers } = useSelector((store) => store.user);
  if (!otherUsers) return; //early return
  let searchArray = otherUsers;

  searchArray = searchArray.filter(
    (e) => e.fullName.toLowerCase().includes(search.toLowerCase())
  );
  const array = search.length > 0 ? searchArray : otherUsers;
  return (
    <div className=" flex flex-col gap-3">
      {array?.map((user) => (
        <OtherUser key={user._id} user={user} />
      ))}
    </div>
  );
};

Users.propTypes = {
  search: PropTypes.string.isRequired,
};

export default Users;
