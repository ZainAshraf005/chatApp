import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {
  const { authUser } = useSelector((store) => store.user);
  if (!authUser) return;
  return (
    <div className="border border-zinc-900 rounded-lg absolute flex bottom-0 left-5 h-[30rem] w-[31rem] z-50 bg-zinc-800">
      <div className=" w-full">
        <div className="w-full p-3">
          <div className="w-36">
            <img className="rounded-full" src={authUser.profilePic} alt="" />
          </div>
          <div className="name p-3 mt-4 ">
            <h1>{authUser.fullName}</h1>
          </div>
          <div className="name p-3 pt-0 text-gray-500 text-[0.9rem] ">
            <h1>
              Username:{" "}
              <span className=" text-gray-400">{authUser.username}</span>
            </h1>
          </div>
          <div className="name px-3 pt-0 text-gray-500 text-[0.9rem] ">
            <h1>
              Email: <span className=" text-gray-400">{authUser.email}</span>
            </h1>
          </div>
          <div className="divider"></div>
          <Link to={"/logout"}>
            <div className="btn">Log out</div>
          </Link>
          <p className="text-sm pt-3">
            chat history will not remove after logout
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
