import React, { useEffect, useRef, useState } from "react";
import { data } from "../../assests/data/data";
import "./Videoplayer.css";
import ReactPlayer from "react-player";


import Carousel from "react-elastic-carousel";
import { Icons } from "../sidecomponent/Icons";

const sourceData = data;

export const Videoplayer = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const [flag, setFlag] = useState([0, 0, 0]);
 
  const handleLike = () => {
    setFlag([flag[0] === 1 ? 0 : 1, 0, flag[2]]);
  };

  const handleDislike = () => {
    setFlag([0, flag[1] === 1 ? 0 : 1, flag[2]]);
  };

  const handleComment = () => {
    setFlag([flag[0], flag[1], flag[2] === 1 ? 0 : 1]);
  };
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleSlideChange = (currentItem) => {
    setFlag([0,0,0])
    setCurrentVideoIndex(currentItem.index);
  };

  return (
    <div className={`${width < 532 ? "" : "mx-[10%]"}`}>
      <Carousel
        verticalMode
         pagination={false}
        showArrows={width < 532 ? false : true}
        enableSwipe={true}
        enableMouseSwipe={true}
        onNextEnd={handleSlideChange}
        onPrevEnd={handleSlideChange}
      >
        {sourceData?.length > 0 &&
          sourceData?.map((item, index) => {
            return (
              <div
                className="relative h-[100vh] flex items-center justify-center"
                key={item.id}
              >
                {index === currentVideoIndex && (
                  <ReactPlayer
                    url={item.src}
                    height={width < 532 ? "100vh" : "90vh"}
                    width={width < 532 ? "95vw" : "532px"}
                    playing
                  />
                )}
                <Icons width={width}
                  handleComment={handleComment}
                  handleDislike={handleDislike}
                  handleLike={handleLike}
                  flag={flag}
                />
              </div>
            );
          })}
      </Carousel>
    </div>
  );
};
