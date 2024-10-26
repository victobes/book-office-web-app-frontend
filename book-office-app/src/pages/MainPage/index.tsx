import "./MainPage.css";
import { FC } from "react";
import { IMainPageProps } from "./typing";
import { Container } from "react-bootstrap";
import { Navbar } from "../../components/Navbar";
import mainImage from "/Users/victoria/book-office-app/src/images/backimage.jpg";

export const MainPage: FC<IMainPageProps> = () => {
    return (
        <>
            <Navbar />
            <Container className="intro">
                <div className="d-flex flex-column">
                    <div>
                        <p className="h1"><strong>Написание, издание, печать, реклама и распространение книг</strong></p>
                    </div>
                    <div className="mt-4">
                        <p className="h5">
                            Работаем с 2024 года, издали <strong>более 100</strong> книг, сотрудничаем с авторами со всего мира.
                        </p>
                        <img
                            src={mainImage}
                            alt="Books image"
                            className="rounded w-100">
                        </img>
                    </div>
                </div>
            </Container>
        </>
    );
};