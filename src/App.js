import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
//import NavBarComponent from './components/NavBarComponent';
import { Nav, Navbar, Container } from "react-bootstrap";
import BlogPage from "./components/BlogPage";
import DashBoardPage from "./components/DashBoardPage";
import AccountPage from "./components/AccountPage";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar className="BgBlue">
          <Nav className="me-auto">
            <Nav.Link className="White" href="/">Blog</Nav.Link>
            <Nav.Link className="White" href="Login">Login</Nav.Link>
            <Nav.Link className="White" href="Account">Account</Nav.Link>
            <Nav.Link className="White" href="DashBoard">DashBoard</Nav.Link>
          </Nav>
          </Navbar>
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
