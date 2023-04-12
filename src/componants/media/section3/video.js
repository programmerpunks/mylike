
import Aos from "aos";
import React, { useEffect, useState } from "react";

const playButton = require("../../../assets/media/images/playbuttonn.png");
const videoThumbnail = require("../../../assets/media/images/videoThumbnail.png");

function VideoCard() {
  const [play, setPlay] = useState(true);
  const playVideo = () => setPlay(!play);
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <>
      <div
        className="flex justify-center bg-universe-foreground bg-no-repeat fade_bg"
        data-aos="fade-up"
      >
        <section className="">
          <div className="rounded-large container-fluid sm:m-4 mt-5 sm:p-10">
            <div className="rounded-big overflow-hidden 2xl:h-[650px] xl:h-[500x] lg:h-[450px] md:h-[400px] h-[300px] p-5">
              <div className="h-full w-full flex justify-center items-center ">
                {play ? (
                  <>
                    <img
                      width="720"
                      height="405"
                      loading="lazy"
                      src={videoThumbnail}
                      className="h-full w-full  rounded-[45px]"
                      alt="YouTube Thumbnil"
                    />
                    <img
                      onClick={playVideo}
                      width="130"
                      height="130"
                      className="absolute shadow md:h-auto h-14"
                      src={playButton}
                      alt="YouTube Play Button"
                    />{" "}
                  </>
                ) : (
                  <iframe
                    className="rounded-[45px] w-screen h-full"
                    title="alter-video"
                    allow="autoplay;"
                    src="https://youtube.com/embed/r9jwGansp1E?autoplay=1&mute=1"
                  ></iframe>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default VideoCard;