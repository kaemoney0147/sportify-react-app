import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { artistMusic } from "../redux/action";

export default function Artist() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const artistsData = useSelector((state) => state.artistpage.artist);

  useEffect(() => {
    if (query.length > 0) {
      dispatch(artistMusic(query));
    } else {
      dispatch(artistMusic("wizkid"));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <div id="recentlyPlayed-div" className="mt-4">
        <div>
          <h4 className="text-white">Artist</h4>
          <span className="text-white">Artists that you can get hooked on</span>
        </div>

        <span id="seeAllArtist" className="grow text-white">
          SEE ALL
        </span>
      </div>

      <div className="row mt-4 row-cols-8 mx-n1 overflow-grid" id="artist">
        {artistsData.slice(0, 5).map((b) => (
          <div className="col px-1" key={b.id}>
            <Link to={"/artist/" + b.artist.id}>
              <div
                className="card px-3 py-3 bg-recentlyPlayed grow"
                id="artist"
              >
                <img
                  src={b.artist.picture_medium}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body px-0">
                  <h5 className="card-title line-clamp-1">{b.artist.name}</h5>
                  <p className="card-text line-clamp-2 text-white">
                    {b.duration}min
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
}
