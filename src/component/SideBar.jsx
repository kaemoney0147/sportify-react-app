import { Container } from "react-bootstrap";
import { HiHome } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import { MdLibraryMusic } from "react-icons/md";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { inputQuery } from "../redux/action";

export default function SideBar() {
  const dispatch = useDispatch();
  return (
    <Container fluid>
      <div className="column12   padding-top" id="sidebar">
        <div id="logo" className="flex-align-center mb-4 grow">
          <img
            className="img-fluid"
            src="Spotify-Logo-White.jpeg"
            alt="spotify logo"
          />
        </div>
        <div id="home" className="sidebar-align-left grow d-none d-md-block">
          <HiHome className="bi bi-music-note-list mr-3" />
          <span className="sidebar-text text-white">Home</span>
        </div>
        <a
          className="search-anchor"
          data-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <div id="search" className="sidebar-align-left grow">
            <BsSearch
              className="bi bi-music-note-list mr-3"
              onClick={() => {
                console.log("am clicked");
                dispatch(inputQuery());
              }}
            />
            <span className="sidebar-text text-white">Search</span>
          </div>
        </a>
        <div
          id="library"
          className="sidebar-align-left mb-4 grow d-none d-md-block"
        >
          <MdLibraryMusic className="bi bi-music-note-list mr-3" />
          <span className="sidebar-text text-white">Library</span>
        </div>
        <div
          id="playlist"
          className="mb-2 sidebar-align-left grow d-none d-md-block"
        >
          <AiOutlinePlusSquare className="bi bi-plus-square mr-3" />
          <span className="sidebar-text text-white">Create Playlist</span>
        </div>
        <div
          id="likedSongs"
          className="sidebar-align-left grow d-none d-md-block"
        >
          <img
            className="img-fluid img-small mr-3"
            src="purple-heart.png"
            alt="white heart on purple background"
          />
          <span className="sidebar-text text-white">Liked Songs</span>
        </div>

        {/* <!-- DIVIDER --> */}
        <div className="translucidLine d-none d-md-block"></div>

        {/* <!-- SIDEBAR - LIST DIV --> */}
        <ul id="sidebarList" className="sidebar-list d-none d-md-block">
          <li className="sidebar-items sidebar-text">Library</li>
          <li className="sidebar-items sidebar-text">Library</li>
          <li className="sidebar-items sidebar-text">Library</li>
          <li className="sidebar-items sidebar-text">Library</li>
        </ul>
      </div>
    </Container>
  );
}
