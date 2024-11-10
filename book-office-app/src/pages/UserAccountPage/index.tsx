import "./UserAccountPage.css";
import {FC} from "react";
import {IUserAccountPageProps} from "./typing";
import {Container} from "react-bootstrap";
import {Navbar} from "../../components/Navbar";
import {UserAccountForm} from "../../components/UserAccountForm";

export const UserAccountPage: FC<IUserAccountPageProps> = () => {
    return (
        <>
            <Navbar/>
            <Container fluid className="container-h">
                <div className="row justify-content-center align-items-center h-100">
                <UserAccountForm></UserAccountForm>
                </div>
            </Container>
        </>
    );
};