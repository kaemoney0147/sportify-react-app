import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fecthMusicList } from "../redux/action";
import { playlist } from "../redux/action";

const GoodMorning = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const music = useSelector((state) => state.bill.listofmusic);

  useEffect(() => {
    if (query.length > 0) {
      dispatch(fecthMusicList(query));
    } else {
      dispatch(fecthMusicList("davido"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container fluid>
      <h2 className="text-white">Good Morning</h2>
      <div className="row mt-4 row-cols-5" id="goodMorning">
        {music.slice(0, 10).map((c) => (
          <div className="col justify-content-start mb-3 grow" key={c.id}>
            <img
              className="img-fluid img-goodMorning"
              src={c.artist.picture_medium}
              alt=""
              onClick={() => {
                console.log("here i am");
                dispatch(playlist(c));
              }}
            />
            <div className="mb-0 bg-goodMorning flex-align-center pl-2 text-white">
              {c.title}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};
export default GoodMorning;
