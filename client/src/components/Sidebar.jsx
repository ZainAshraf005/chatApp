import {
  AiOutlineMenu,
  AiOutlineMessage,
  AiOutlineDelete,
} from "react-icons/ai";
import { IoIosCall } from "react-icons/io";
import { LuRadar } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useRef, useState } from "react";
import Profile from "./Profile";

const Sidebar = () => {
  const [clicked, setClicked] = useState(false);
  const [profileBox, setProfileBox] = useState(false);
  const profileRef = useRef(null);

  const handleClickOutside = (event) => {
    if (profileRef.current && !profileRef.current.contains(event.target)) {
      setProfileBox(false);
      setClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={` flex  flex-col ${
        clicked ? " absolute rounded-r-xl w-56" : "w-12"
      } bg-zinc-800 h-screen justify-between z-40 transition-all delay-75 p-2 text-xl`}
    >
      <div className="">
        {clicked ? (
          <RxCross2
            onClick={() => setClicked(!clicked)}
            className="cursor-pointer"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setClicked(!clicked)}
            className="cursor-pointer"
          />
        )}
        <div className="mt-7 flex flex-col gap-4">
          <div className="flex gap-2 items-center cursor-pointer">
            <AiOutlineMessage />
            {clicked ? <span className="text-lg text-[.9rem]">chats</span> : ""}
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <IoIosCall />
            {clicked ? <span className="text-lg text-[.9rem]">Calls</span> : ""}
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <LuRadar />
            {clicked ? (
              <span className="text-lg text-[.9rem]">status</span>
            ) : (
              ""
            )}
          </div>
          <div className="divider"></div>
        </div>
      </div>
      <div className="flex flex-col gap-3 &>">
        <div className="flex gap-2 items-center cursor-pointer">
          <FaRegStar />
          {clicked ? (
            <span className="text-lg text-[.9rem]">Starred Messages</span>
          ) : (
            ""
          )}
        </div>
        <div className="flex gap-2 items-center cursor-pointer">
          <AiOutlineDelete />
          {clicked ? (
            <span className="text-lg text-[.9rem]">Archived Chats</span>
          ) : (
            ""
          )}
        </div>
        <div className="divider"></div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-2 items-center cursor-pointer">
          <IoSettingsOutline />
          {clicked ? (
            <span className="text-lg text-[.9rem]">Settings</span>
          ) : (
            ""
          )}
        </div>
        <div className="flex gap-2 items-center cursor-pointer">
          <CgProfile onClick={() => setProfileBox(!profileBox)} />
          {clicked && (
            <span
              onClick={() => setProfileBox(!profileBox)}
              className="text-lg text-[.9rem]"
            >
              Profile
            </span>
          )}
        </div>
        <div ref={profileRef}>{profileBox && <Profile />}</div>
      </div>
    </div>
  );
};

export default Sidebar;
