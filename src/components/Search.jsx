import React, { useContext } from "react";
import assets from "../assets/assets";
import { Context } from "../context/Context";

const Search = () => {
  const { input, setInput, onSent } = useContext(Context);
  return (
    <div className="absolute bottom-0 w-full px-6 max-sm:px-1">
      <div className="flex items-center justify-between gap-5 bg-[#f0f4f9] py-3 px-5 rounded-full my-5 w-full max-sm:px-2 max-sm:gap-2">
        <input
          type="text"
          className="flex flex-1 bg-transparent border-none outline-none p-2 text-lg"
          placeholder="Talk about anything ..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div
          className="flex gap-3 items-center"
          onClick={() => {
            onSent();
          }}
        >
          {/* <img src={assets.mic_icon} alt="" className="cursor-pointer w-6" /> */}
          <p className="">Send</p>
          <img
            src={assets.send_icon}
            alt="send"
            className="cursor-pointer w-6"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
