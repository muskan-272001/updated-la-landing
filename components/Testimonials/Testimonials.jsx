import React from "react";
import HoverVideoPlayer from "../ReactPlayer";
import VideoNameBoxes from "../VideoNameBoxes/VideoNameBoxes";

const Testimonials = () => {
  return (
    <>
      {" "}
      <div className="testimonials">
        <div className="testimonialCard">
          <div className="testimonialCardVideo">
          <div class="row">
            <div class="col">
              <div className="boxesVideos">
                <HoverVideoPlayer
                  url="/assets/videos/second.mp4"
                  width="100%"
                  height="auto"
                />
              </div>
            </div>
            <div class="col">
              <div className="boxesVideos">
                <HoverVideoPlayer
                  url="/assets/videos/second.mp4"
                  width="100%"
                  height="auto"
                />
              </div>
            </div>
            <div class="col">
              <div className="boxesVideos">
                <HoverVideoPlayer
                  url="/assets/videos/third.mp4"
                  width="100%"
                  height="auto"
                />
              </div>
            </div>
            <div class="col">
              <div className="boxesVideos">
                <HoverVideoPlayer
                  url="/assets/videos/last.mp4"
                  width="100%"
                  height="auto"
                />
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <VideoNameBoxes />
    </>
  );
};

export default Testimonials;
