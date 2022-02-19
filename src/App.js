import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
//import NavBarComponent from './components/NavBarComponent';
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import BlogPage from "./components/BlogPage";
import DashBoardPage from "./components/DashBoardPage";
import AccountPage from "./components/AccountPage";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Col md={12} className="BgSilver d-flex justify-content-center">
            <Navbar className="">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/" className="Blue">
                 Blog
                </Nav.Link>
                {/* <Col> */}
                {/* <Nav.Link className="Blue" href="Login">
                  Login
                </Nav.Link>
                </Col>
                
                <Nav.Link className="Blue" href="Account">
                  Create Account
                </Nav.Link> */}
                <Nav.Link as={Link} to="/DashBoard" className="Blue">
                  DashBoard
                </Nav.Link>
              </Nav>
            </Navbar>
          </Col>
        </Row>
      </Container>
      <Routes>
        <Route path="/" element={<BlogPage />} />
        <Route path="Login" element={<LoginPage />} />
        <Route path="Account" element={<AccountPage />} />
        <Route path="DashBoard" element={<DashBoardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
