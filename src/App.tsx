import { Button, Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import hmbLogo from "../src/assets/hmbLogo.png";
import "../src/styles/logo.css";

function App() {
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col style={{ alignContent: "center", alignItems: "center" }}>
            <Image src={hmbLogo} rounded className="logo-img" />
            <div className="text-center">
              <h3
                style={{
                  fontWeight: "bold",
                  // backgroundColor: "#e9e9e9ff",
                  borderRadius: "10px",
                  fontSize: "30px",
                }}
              >
                Shop App
              </h3>
            </div>
          </Col>
        </Row>
        <Row
          className="justify-content-md-center"
          style={{ marginTop: "70px" }}
        >
          <Col xs={12} md="auto" className="text-center mb-2 mb-md-0">
            <a
              href="https://ckarlosdev.github.io/maintenance-project-react/"
              // target="_blank"
              rel="noopener noreferrer"
            >
              <Button style={{ width: "300px", fontWeight: "bold" }}>
                <div className="text-center">
                  <i
                    className="bi bi-tools"
                    style={{ fontSize: "2rem", color: "white" }}
                  >
                    {" "}
                    Issues
                  </i>
                </div>
              </Button>
            </a>
          </Col>
        </Row>
        <Row
          className="justify-content-md-center"
          style={{ marginTop: "70px" }}
        >
          <Col xs={12} md="auto" className="text-center mb-2 mb-md-0">
            <a
              href="https://ckarlosdev.github.io/oilChanges-project/"
              // target="_blank"
              rel="noopener noreferrer"
            >
              <Button style={{ width: "300px", fontWeight: "bold" }}>
                <div className="text-center">
                  <i
                    className="bi bi-droplet-half"
                    style={{ fontSize: "2rem", color: "white" }}
                  >
                    {" "}
                    Maintenance
                  </i>
                </div>
              </Button>
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
