import "./LoginPage.css";
import { Container } from "react-bootstrap";
import { Navbar } from "../../components/Navbar";
import { LogInForm } from "../../components/LogInForm";

export const LogInPage = () => {
    return (
        <>
            <Navbar />
            <Container fluid className="container-h">
                <div className="row justify-content-center align-items-center h-100">
                    <LogInForm></LogInForm>
                </div>
            </Container>
        </>
    );
};