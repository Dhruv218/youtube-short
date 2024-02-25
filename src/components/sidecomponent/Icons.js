import React from "react";
 import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { MdOutlineComment } from "react-icons/md";
import { HiDotsHorizontal } from "react-icons/hi";
export const Icons = ({flag,handleComment,handleDislike,handleLike,width}) => {
  return (
    <>
      <div
        onClick={handleLike}
        className={`absolute bg-transparent flex flex-col items-center justify-center bottom-onmobile transition-all cursor-pointer   right-[-65px] bottom-[50%]  `}
      ><div className={`rounded-full  p-3 opacity-50 hover:bg-opacity-75 bg-gray-700 ${
        flag[0] && "bg-gray-200 hover:bg-gray-700"
      }`}>
        <AiOutlineLike
          color={flag[0] ? "black" : "white"}
          size={width < 532 ? 20 : 30}
        />
        </div>
        <p className={`text-white font-semibold text-[16px] mt-1`}>Like</p>
      </div>
      <div
        onClick={handleDislike}
        className={`absolute bg-transparent flex flex-col items-center justify-center bottom-onmobile transition-all cursor-pointer   right-[-65px] ${width<532?'bottom-[35%]':'bottom-[38%]'}  `}
      ><div className={`rounded-full  p-3 opacity-50 hover:bg-opacity-75 bg-gray-700 ${
        flag[1] && "bg-gray-200 hover:bg-gray-700"
      }`}>
       <AiOutlineDislike
          color={flag[1] ? "black" : "white"}
          size={width < 532 ? 20 : 30}
        />
        </div>
        <p className={`text-white font-semibold text-[16px] mt-1`}>Dislike</p>
      </div>
      <div
        onClick={handleComment}
        className={`absolute bg-transparent flex flex-col  items-center   bottom-onmobile-c transition-all cursor-pointer   right-[-75px] ${width<532?'bottom-[20%]':'bottom-[26%]'}   `}
      ><div className={`rounded-full  p-3 opacity-50 hover:bg-opacity-75 w-fit bg-gray-700 ${
        flag[2] && "bg-gray-200 hover:bg-gray-700"
      }`}>
        <MdOutlineComment
          color={flag[2] ? "black" : "white"}
          size={width < 532 ? 20 : 30}
        />
        </div>
        <p className={`text-white font-semibold text-[16px] ml-2 mt-1`}>Comment</p>
      </div>
      
      <div
                   className={`absolute p-3 hover:bg-opacity-75 bottom-onmobile transition-all cursor-pointer rounded-full bg-gray-700 right-[-65px] ${width<532?'bottom-[10%]':'bottom-[18%]'} `}
                >
                  <HiDotsHorizontal
                    color= "white"
                    size={width<532? 20:30}
                  />
                </div>
    </>
  );
};
