import "./NavBar.css";
import { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
    const [ activeLink, setActiveLink ] = useState("home");
    const [ scrolled, setScrolled ] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === "home" ? "activeProf navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>Inicio</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === "skills" ? "activeProf navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("skills")}>Habilidades</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === "projects" ? "activeProf navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("projects")}>Trabajos</Nav.Link>
                    </Nav>
                <Navbar.Brand href="/">
                    <span>TY</span>
                </Navbar.Brand>
                    <span className="navbar-text">
                        <button className="vvd" onClick={() => console.log("connect")}><span>Contáctame</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;