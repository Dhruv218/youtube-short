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
  const carouselRef = useRef(null);
  const reactPlayerRef = useRef(null);
  const handleSlideChange = (currentItem) => {
    setFlag([0, 0, 0]);
    setCurrentVideoIndex(currentItem.index);
  };

  const handleWheel = (event) => {
    // Check if the wheel event occurred on the video element

    // Call the swiping function of the carousel
    if (event.deltaY > 0) {
      carouselRef.current.slideNext();
    } else {
      carouselRef.current.slidePrev();
    }
  };
  const playpausevideo = () => {
    console.log(reactPlayerRef?.current.player );
   const player = reactPlayerRef.current?.player;
  if (player) {
    if (player.isPlaying) {
      player.player.player.pauseVideo();
    } else {
      player.player.player.playVideo();
    }
  }
  };
 
  useEffect(() => {
       setTimeout(() => {
      document
        ?.querySelector(".playerr")
        ?.addEventListener("wheel", handleWheel);
        document
        ?.querySelector(".playerr")
        .addEventListener("click", playpausevideo);
      console.log(reactPlayerRef?.current?.player.player.player);
    }, 200);

    return () => {
      document
        ?.querySelector(".playerr")
        ?.removeEventListener("wheel", handleWheel);
        document
        ?.querySelector(".playerr")
        ?.removeEventListener("click", playpausevideo);
    };
  }, [currentVideoIndex]);

  return (
    <div className={`${width < 532 ? "" : "mx-[10%]"}`}>
      <Carousel
        verticalMode
        pagination={false}
        showArrows={width < 532 ? false : true}
        enableSwipe={true}
        enableMouseSwipe={true}
        ref={carouselRef}
        onNextEnd={handleSlideChange}
        onPrevEnd={handleSlideChange}
      >
        {sourceData?.length > 0 &&
          sourceData?.map((item, index) => {
            return (
              <div
                className={`relative h-[100vh] m-4 flex items-center justify-center ${
                  index === currentVideoIndex ? "parent" : ""
                }`}
                key={item.id}
              >
                {index === currentVideoIndex && (
                  <div className="playerr absolute h-full w-full left-0 right-0 top-0 bottom-0"></div>
                )}
                {index === currentVideoIndex && (
                  <ReactPlayer
                    ref={reactPlayerRef}
                    url={item.src}
                    height={width < 532 ? "100vh" : "90vh"}
                    width={width < 532 ? "95vw" : "532px"}
                    playing
                  />
                )}
                <Icons
                  width={width}
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
