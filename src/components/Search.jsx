import React, { useContext } from "react";
import { Context } from "../context/Context";

const Search = () => {
  const { input, setInput, onSent } = useContext(Context);
  return (
    <div className="absolute bottom-0 w-full px-6 max-sm:px-1 max-[340px]:w-80">
      <div className="flex items-center justify-between gap-5 bg-[#f0f4f9] py-3 px-5 rounded-full my-5 w-full max-[340px]:w-64 max-sm:px-2 max-sm:gap-2 max-[340px]:gap-1">
        <input
          type="text"
          className="flex bg-transparent border-none outline-none p-2 text-lg min-[350px]:flex-1 max-[340px]:text-sm max-[340px]:p-1"
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
          <p className="font-semibold">Send</p>
          {/* <img
            src={assets.send_icon}
            alt="send"
            className="cursor-pointer w-5"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Search;
