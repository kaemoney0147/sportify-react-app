import React, { useState } from "react";
import { Form } from "react-bootstrap";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useDispatch } from "react-redux";
import { fecthMusicList } from "../redux/action";
import { albumMusic } from "../redux/action";
import { artistMusic } from "../redux/action";
import { useSelector } from "react-redux";

export default function NavBar() {
  const input = useSelector((state) => state.input.input);
  console.log("this is the input", input);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    console.log(e.target.value);
    setQuery(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(fecthMusicList(query));
    dispatch(albumMusic(query));
    dispatch(artistMusic(query));
  };
  return (
    <div id="profile-div" className="mb-4">
      <div className="arrow-div d-none d-md-block">
        <div className="d-flex">
          <div className="left-arrow round mr-2">
            <BsFillArrowLeftCircleFill className="bi bi-chevron-left" />
          </div>
          <div className="right-arrow round">
            <BsFillArrowRightCircleFill className="bi bi-chevron-right" />
          </div>
        </div>
      </div>{" "}
      {input && (
        <Form onSubmit={handleSubmit}>
          <Form.Control
            type="search"
            value={query}
            onChange={handleChange}
            placeholder="search here"
          />
        </Form>
      )}
      <div className="btn-group" id="profile">
        <button
          type="button"
          className="btn btn-secondary dropdown-toggle transparent"
          data-toggle="dropdown"
          data-display="static"
          aria-expanded="false"
        >
          <i className="bi bi-person-circle mr-2"></i>
          <span className="truncate">SpotifyProfile and asdf</span>
        </button>
        <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-right px-3 dropdown-bg">
          <a
            href="./profile.html"
            target="”_blank”"
            className="color-items grow styled-items"
            type="button"
          >
            Log in
          </a>
          {/* {/* <!-- <hr /> -->
          <!-- <button className="dropdown-item color-items" type="button">Backoffice</button> --> */}
        </div>
      </div>
    </div>
  );
}
