import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { AiFillHeart } from "react-icons/ai";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { playmusic } from "../redux/action";
import {
  IoIosRepeat,
  IoIosSkipBackward,
  IoIosSkipForward,
} from "react-icons/io";
import { BiShuffle } from "react-icons/bi";
import { MdPictureInPictureAlt } from "react-icons/md";

export default function FootComponent() {
  const defineDuration = (t) => {
    return Math.floor(t / 60) + ":" + ("0" + Math.floor(t % 60)).slice(-2);
  };
  const playList = useSelector((state) => state.playlist.songs);
  console.log("this is playlist", playList);
  const playsong = useSelector((state) => state.play.playbutton);
  console.log(playsong);
  const dispatch = useDispatch();
  return (
    <Container id="fixedContainer" fluid>
      <div className="row">
        <div className="col-sm-6 col-lg-3 order-sm-2 order-lg-0">
          <div id="fixed-left">
            <img
              className="img-fluid mr-2 grow"
              src={playList.length === 0 ? "" : playList.album.cover_small}
              alt=""
              id="fixedImage"
            />
            <div className="title-left mr-4">
              <p className="bold" id="fixedTitle">
                {playList.length === 0
                  ? "Choose an artist or album"
                  : playList.album.title}
              </p>
              <p className="faded" id="fixedBand">
                {playList.length === 0
                  ? "Breather the music!"
                  : playList.artist.name}
              </p>
            </div>
            <div className="icons-left">
              <AiFillHeart className="bi bi-heart mr-2 grow" />
              <MdPictureInPictureAlt className="bi bi-pip grow" />
            </div>
          </div>
        </div>
        <div className="col12 col-lg-6 mb-sm-4 order-sm-1 order-lg-1">
          <div id="fixed-middle">
            <div id="middle-top">
              <div className="shuffle">
                <BiShuffle className="bi bi-shuffle faded mr-4" />
              </div>
              <div className="skip-start">
                <IoIosSkipBackward className="bi bi-skip-start faded mr-4" />
              </div>
              <div className="play">
                <BsFillPlayCircleFill
                  className="bi bi-play-fill faded mr-4 round-white text-dark"
                  onClick={() => console.log("am ok")}
                />
              </div>
              <div className="skip-end">
                <IoIosSkipForward className="bi bi-skip-end faded mr-4" />
              </div>
              <div className="repeat">
                <IoIosRepeat className="bi bi-repeat faded mr-4" />
              </div>
            </div>
            <div id="middle-bottom">
              <div className="startTime mr-2 faded">0:00</div>
              <div id="totalAndProgress">
                <div className="progress"></div>
                <div className="total"></div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar progress-width"
                  role="progressbar"
                  // style="width: 55%"
                  aria-valuenow="55"
                  aria-valuemin="0"
                  aria-valuemax="300"
                >
                  55%
                </div>
              </div>

              <div className="endTime ml-2 faded">
                {playList.length === 0
                  ? "duration"
                  : defineDuration(playList.duration)}
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 align-fixed-right order-sm-2 order-lg-2">
          <div id="fixed-right">
            <div className="icons-right">
              <i className="bi bi-blockquote-right mr-2"></i>
              <i className="bi bi-pc-display mr-2"></i>
              <i className="bi bi-volume-up mr-2"></i>
            </div>
            <div className="volume"></div>
          </div>
        </div>
      </div>
    </Container>
  );
}
