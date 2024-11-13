import "./SignUpPage.css";
import {Container} from "react-bootstrap";
import {Navbar} from "../../components/Navbar";
import {SignUpForm} from "../../components/SignUpForm"

export const SignUpPage = () => {
    return (
        <>
            <Navbar/>
            <Container fluid className="container-h">
                <div className="row justify-content-center align-items-center h-100">
                    <SignUpForm></SignUpForm>
                </div>
            </Container>
        </>
    );
};
