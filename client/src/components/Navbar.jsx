import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="absolute inset-0 flex h-14 items-center justify-between border border-transparent border-b-gray-600 px-12">
        <div className="logo">WhyApp</div>
        <div className="links flex gap-4">
          <Link to={"/"}>Home</Link>
          <Link to={"/login"}>Login</Link>
          <Link to={"/signup"}>Signup</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
