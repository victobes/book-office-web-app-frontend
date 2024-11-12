import "./Navbar.css"
import { FC } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarComp from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import { selectUser } from "../../core/store/slices/selectors.ts";
import { useDispatch, useSelector } from "../../core/store";
import { api } from "../../core/api";
import { refreshUser } from "../../core/store/slices/userSlice.ts";

export const Navbar: FC = () => {
    const { isAuth, username } = useSelector(selectUser);
    const dispatch = useDispatch();

    const logout = () => {
        api.users.usersLogOutCreate()
            .then(() => console.log("logout"))
            .catch(err => console.log(err));
        dispatch(refreshUser())
    }

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
                        {isAuth ? (
                            <>
                                <Nav className="me-3">
                                    <NavLink to="/user_account" className="text-black text-decoration-none">
                                        {username}
                                    </NavLink>
                                </Nav>
                                <Nav className="me-3">
                                    <NavLink to="/" onClick={logout} className="text-black text-decoration-none">
                                        Выход
                                    </NavLink>
                                </Nav>
                            </>
                        ) : (
                            <>
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
                            </>
                        )}
                    </NavbarComp.Collapse>
                </Container>
            </NavbarComp>
        </>
    );
};