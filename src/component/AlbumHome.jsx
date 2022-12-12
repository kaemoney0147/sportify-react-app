import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { albumMusic } from "../redux/action";

export default function AlbumHome() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.albumpage.album);

  useEffect(() => {
    if (query.length > 0) {
      dispatch(albumMusic(query));
    } else {
      dispatch(albumMusic("burnboy"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <div id="recentlyPlayed-div" className="mt-4">
        <h4 className="text-white">Albums</h4>
        <span id="seeAllAlbum" className="grow text-white">
          SEE ALL
        </span>
      </div>
      <div className="row mt-4 row-cols-8 mx-n1 overflow-grid mb-3" id="albums">
        <div className="overflow-grid" id="albums"></div>
        {albums.slice(0, 5).map((c) => (
          <div className="col px-1" key={c.album.id}>
            <div className="card px-3 py-3 bg-recentlyPlayed grow" id="albums">
              <img
                src={c.album.cover_medium}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body px-0">
                <h5 className="card-title line-clamp-1 text-white">
                  {c.album.title}
                </h5>
                <p className="card-text line-clamp-2 text-white">
                  {c.album.type}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
