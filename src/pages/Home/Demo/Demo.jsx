import React, { useState, useRef } from "react";
import replatformDemoVideo from "../../../assets/videos/ReplatformVideo.mp4";
import playBtn from "../../../assets/commonImages/play-btn.svg";
import "../Home.scss";
import "./Demo.scss";

const Demo = () => {
    const [videoNotActive, setVideoNotActive] = useState(true);
    const videoRef = useRef(null);

    const handleVideoPlay = () => {
        if (videoNotActive) {
            videoRef.current.play();
            videoRef.current.controls = true;
        } else {
            videoRef.current.pause();
            videoRef.current.controls = false;
            videoRef.current.autoplay = true;
        }
        setVideoNotActive(!videoNotActive);
    };

    return (
        <div id="demo" className="demo-page"> 
            <div className="center">
                <p className="service-chip pricing-chip">DEMO</p>
                <p className="section-heading pricing-heading">Experience Our Solutions</p>
            </div>
            <div className="demo-wrapper flex_align_center_HV">
                <div className="video-container">
                    <video 
                        src={replatformDemoVideo} 
                        className={`demo-video ${videoNotActive ? "" : "opacity-normal"}`} 
                        ref={videoRef}
                        onClick={handleVideoPlay}
                        controls={false}
                    ></video>
                    <div className={`video-controller ${videoNotActive ? "active" : ""}`}>
                        {videoNotActive ? 
                                <img src={playBtn} alt="Play button" onClick={handleVideoPlay}/>
                            : 
                                " " 
                        }
                    </div>
                </div>
            </div>
        </div>
    );    
};

export default Demo;
