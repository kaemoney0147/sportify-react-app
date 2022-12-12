import "./App.css";
import Home from "./component/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./component/SideBar";
import FootComponent from "./component/FootComponent";
import { Col, Container, Row } from "react-bootstrap";
import ArtistPages from "./component/Pages/ArtistPages";

function App() {
  return (
    <Container fluid className="App p-0">
      <Row>
        <BrowserRouter>
          <Col className="col-2 p-0">
            <SideBar />
          </Col>
          <Col className="col-10">
            <Routes>
              <Route path="/artist/:artistid" element={<ArtistPages />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Col>
        </BrowserRouter>
      </Row>
      <FootComponent />
    </Container>
  );
}

export default App;
