import React, { useContext } from "react";
import assets from "../assets/assets";
import { Context } from "../context/Context";
import './Chat.css';
const Chat = () => {
  const { onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input } = useContext(Context);
  return (
    <div className="flex py-6 my-3 mx-6 rounded-xl min-h-[75vh] flex-col gap-5 m-auto justify-center max-sm:text-center">
      {!showResult ? (
        <div className="flex flex-col mx-auto gap-4 justify-center items-center">
          <h1 className="salam text-6xl max-[300px]:hidden">Assalamu Alaikum!</h1>
          <p className="">No matter the situation,<br className="hidden max-sm:block"/> Quran is the way</p>
          <p className="text-gray-600 text-center">
            Describe your current situation and<br className="hidden sm:block "/> find Quranic
            verses that suit your current circumstances
          </p>
        </div>
      ) : (
        <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
      )}
    </div>
  );
};

export default Chat;
