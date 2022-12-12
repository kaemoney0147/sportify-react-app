import { Container } from "react-bootstrap";
import GoodMorning from "./GoodMorning";
import Artist from "./Artist";
import NavBar from "./NavBar";
import AlbumHome from "../component/AlbumHome";

export default function Home() {
  return (
    <Container fluid className="HOME padding-top">
      <NavBar />
      <GoodMorning />
      <AlbumHome />
      <Artist />
    </Container>
  );
}
