import "./MainPage.css";
import { Container } from "react-bootstrap";
import { Navbar } from "../../components/Navbar";
import writeIcon from "/Users/victoria/book-office-app/src/icons/writing.svg";
import printIcon from "/Users/victoria/book-office-app/src/icons/printing.svg";
import publishIcon from "/Users/victoria/book-office-app/src/icons/publishing.svg";
import advIcon from "/Users/victoria/book-office-app/src/icons/adv.svg";

export const MainPage = () => {
    return (
        <>
            <Navbar />
            <Container className="bg">
                <div className="intro d-flex flex-column">
                    <p className="h1"><strong>Написание, издание, печать, реклама и распространение книг</strong></p>
                    <p className="h5">
                        Работаем с 2024 года, издали <strong>более 100</strong> книг, сотрудничаем с авторами со всего мира.
                    </p>
                </div>
                <div className="row mt-3 justify-content-between">
                    <div
                        className="col">
                        <div className="card w-100 mt-3">
                            <img className="card-img-top img-card" src={writeIcon} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="">Написание</h5>
                                <p className="card-text">Помогаем с написанием экспертных и художественных книг</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col">
                        <div className="card w-100 mt-3">
                            <img className="card-img-top img-card" src={publishIcon} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="">Издание</h5>
                                <p className="card-text">Полный цикл работ над текстом, а также дизайном макета и обложки</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col">
                        <div className="card w-100 mt-3">
                            <img className="card-img-top img-card" src={printIcon} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="">Печать</h5>
                                <p className="card-text">Печать малых и больших тиражей в твердом и мягком переплете</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col">
                        <div className="card w-100 mt-3">
                            <img className="card-img-top img-card" src={advIcon} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="">Реклама</h5>
                                <p className="card-text">Распространение тиража и широкие рекламные возможности</p>
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </>
    );
};

