import "./Navbar.css"
import {FC} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarComp from "react-bootstrap/Navbar";
import {Link, NavLink} from "react-router-dom";

export const Navbar: FC = () => {
    return (
        <>
            <NavbarComp expand="lg"
                        data-bs-theme="dark"
                        className="main-navbar"
            >
                <Container>
                    <NavbarComp.Brand>
                        <Link to="/" className="text-black text-decoration-none">
                            <strong>Книжное издательство</strong>
                        </Link>
                    </NavbarComp.Brand>
                    <NavbarComp.Toggle
                        aria-controls="basic-navbar-nav"
                        className="outline-none"
                    />
                    <NavbarComp.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto gap-4 gap-sm-3">
                            <NavLink to="/book_production_services_list" className="text-black text-decoration-none">
                                Услуги
                            </NavLink>
                        </Nav>
                    </NavbarComp.Collapse>
                </Container>
            </NavbarComp>
        </>
    );
};