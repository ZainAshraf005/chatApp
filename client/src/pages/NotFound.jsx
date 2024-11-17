import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NotFound = () => {
  const { isLoggedIn } = useSelector((store) => store.user);
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-gray-800 text-zinc-50">
      <h1 className="text-9xl">404</h1>
      <h1 className="text-5xl">Page Not Found</h1>
      <Link to={isLoggedIn ? "/chat" : "/"}>
        <div className="btn btn-lg my-7">go to home page</div>
      </Link>
    </div>
  );
};

export default NotFound;
