import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import NavBar from "../NavBar";
import style from "../Pages/cssfolder/style.css";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
export default function ArtistPages() {
  const dispatch = useDispatch();
  const params = useParams();
  const [data, setData] = useState([]);
  const getArtist = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/artist/${params.artistid}/top?limit=50`
      );
      let artistData = await response.json();
      console.log(artistData.data);
      if (response.ok) {
        setData(artistData.data);
      } else {
        console.log("Error fetching artist details");
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getArtist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container fluid className="padding-top">
      <NavBar />
      {data.slice(3, 4).map((c) => (
        <div className="Currentsong" key={c.artist.id}>
          <img src={c.album.cover_xl} width="100%" height="300vh" alt="nn" />
          <div className="monthlylistners">
            <i className="bi bi-patch-check-fill"></i>
            Verified Artist
            <h1>{c.artist.name}</h1>
            <p>{c.rank} monthly listners</p>
          </div>
        </div>
      ))}
      <div className="currentsongplaylist">
        <div className="followArtist ">
          <i className="bi bi-play-circle-fill"></i>
          <button
            type="button"
            data-toggle="modal"
            data-target="#exampleModal"
            id="follow-btn"
          >
            Follow
          </button>
          <span>...</span>
        </div>
        {/* <!-- table that display artist songs --> */}
        <div className="currentsongplaying">
          <div className="orderlist">
            <h5>Popular</h5>
            <div className="playlisttable">
              <table id="table" className="table table-borderless my-0">
                <tbody>
                  {data.map((d, index) => (
                    <tr key={d.id}>
                      <th scope="row">{index + 1}</th>
                      <td>
                        <img
                          src={d.album.cover_medium}
                          width="50px"
                          height="50px"
                          alt="nn"
                        />
                      </td>
                      <td>{d.title}</td>
                      <td>{d.rank}</td>
                      <td>{d.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <a id="moreMusic" href="#" className="p-2">
                SEE MORE
              </a>
            </div>
          </div>
          {/* <!-- artist song right div --> */}
          {data.slice(3, 4).map((c) => (
            <div className="Artistpick" key={c.id}>
              <h5> Artist pick</h5>
              <div className="artpickby">
                <div className="artistpickplaylist">
                  <img
                    src={c.album.cover_small}
                    width="70px"
                    height="70px"
                    alt="nn"
                  />
                </div>
                <div className="playlistNow">
                  <div className="postedImg d-flex">
                    <img src={c.album.cover_small} alt="artist" />
                    <h6>posted by {c.artist.name}</h6>
                  </div>
                  <div className="postedby mb-0">
                    <h6 className="mt-0">best of {c.artist.name}</h6>
                    <p>Playlist</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="discographysection d-flex justify-content-between p-4">
          <div className="discography">
            <h3>Discography</h3>
          </div>
          <a id="seeall" href="#" className="p-2">
            SEE ALL
          </a>
        </div>
        <section className="buttons mt-3 p-4">
          <button type="button" className="btn btn-outline-success">
            Popular releases
          </button>
          <button id="albums" type="button" className="btn btn-outline-success">
            Albums
          </button>
          <button type="button" className="btn btn-outline-success">
            Singles and EPs
          </button>
          <button type="button" className="btn btn-outline-success">
            Compilations
          </button>
        </section>
        <div id="cardrow" className="row mt-4 mb-4 p-2"></div>
      </div>
    </Container>
  );
}
