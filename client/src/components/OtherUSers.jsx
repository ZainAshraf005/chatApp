import { useState } from "react";
import Users from "./Users";

const OtherUSers = () => {
  const [search, setSearch] = useState("")
  return (
    <>
      <div className="w-full h-screen overflow-hidden border-4 border-transparent border-r-gray-800 px-3">
        <h1>Chats</h1>
        <div className="search">
          <form action="">
            <input
              className="bg-transparent px-3 py-1 mt-3 w-full outline-none border border-gray-600 rounded-md"
              placeholder="search..."
              autoComplete="off"
              type="text"
              name="search"
              id="search"
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
            />
          </form>
          <div className="divider"></div>
        </div>
        <div className=" overflow-y-scroll h-[33.5rem]">
          <Users search={search} />
        </div>
      </div>
    </>
  );
};

export default OtherUSers;
