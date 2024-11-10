import "./Navbar.css"
import { FC } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarComp from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";

export const Navbar: FC = () => {
    return (
        <>
            <NavbarComp expand="lg"
                data-bs-theme="light"
                className="main-navbar"
                fixed="top"
            >
                <Container>
                    <NavbarComp.Brand>
                        <Link to="/" className="text-black text-decoration-none">
                            <strong>Издательство</strong>
                        </Link>
                    </NavbarComp.Brand>
                    <NavbarComp.Toggle
                        aria-controls="basic-navbar-nav"
                        // className="black"
                        className=""
                    />
                    <NavbarComp.Collapse
                        id="basic-navbar-nav"
                        className="justify-content-left">
                        <Nav className="me-3">
                            {/* gap-4 gap-sm-3 */}
                            <NavLink to="/book_production_services_list" className="text-black text-decoration-none">
                                Услуги
                            </NavLink>
                        </Nav>
                        <Nav className="me-3">
                            <NavLink to="/book_publishing_projects_list" className="text-black text-decoration-none">
                                Проекты
                            </NavLink>
                        </Nav>
                    </NavbarComp.Collapse>
                    <NavbarComp.Collapse className="justify-content-end">
                        <Nav className="me-3">
                            <NavLink to="/user_account" className="text-black text-decoration-none">
                                Аккаунт
                            </NavLink>
                        </Nav>
                        <Nav className="me-3">
                            <NavLink to="/sign_up" className="text-black text-decoration-none">
                                Регистрация
                            </NavLink>
                        </Nav>
                        <Nav className="me-3">
                            <NavLink to="/log_in" className="text-black text-decoration-none">
                                Вход
                            </NavLink>
                        </Nav>
                    </NavbarComp.Collapse>
                </Container>
            </NavbarComp>
        </>
    );
};