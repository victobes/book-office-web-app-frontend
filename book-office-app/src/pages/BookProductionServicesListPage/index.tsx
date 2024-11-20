import "./BookProductionServicesListPage.css";
import { Navbar } from "../../components/Navbar";
import { Button, Container } from "react-bootstrap";
import { BookProductionServiceListCard } from "../../components/BookProductionServiceListCard";
import { useBookProductionServicesListPage } from "./useBookProductionServicesListPage";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { IBookProductionServiceListCardProps } from "../../components/BookProductionServiceListCard/typing";
import { LoadingAnimation } from "../../components/LoadingAnimation";

export const BookProductionServicesListPage = () => {
    const {
        bookProductionServicesList,
        BPPId,
        selectedServicesCount,
        searchBookProductionServiceTitle,
        isPageActive,
        updateBPSListPageFunc,
        handleSearchServiceClick,
        handleSearchServiceTitleChange,
    } = useBookProductionServicesListPage();
    return (
        <>
            <Navbar />
            <Container className="content-wrapper">
                <Breadcrumbs
                    endItem="Услуги"
                />
                <div
                    className="d-flex flex-column mt-4 mb-4 p-0"
                >
                    <div
                        className="d-flex justify-content-end"
                    >
                        <Link
                            to={"/book_publishing_project/" + BPPId}
                            className={BPPId !== undefined && BPPId !== null && BPPId !== 0 ? "btn project-btn" : "btn pt-0 pb-0 project-btn-blocked"}
                            state={{ from: BPPId }}>
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M44 24H32L28 30H20L16 24H4M44 24V36C44 37.0609 43.5786 38.0783 42.8284 38.8284C42.0783 39.5786 41.0609 40 40 40H8C6.93913 40 5.92172 39.5786 5.17157 38.8284C4.42143 38.0783 4 37.0609 4 36V24M44 24L37.1 10.22C36.7688 9.55357 36.2584 8.99274 35.6259 8.60056C34.9935 8.20838 34.2642 8.00039 33.52 8H14.48C13.7358 8.00039 13.0065 8.20838 12.3741 8.60056C11.7417 8.99274 11.2312 9.55357 10.9 10.22L4 24"
                                    stroke={BPPId !== undefined && BPPId !== null && BPPId !== 0 ? "#000000" : "#858dc7"}
                                    stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p>Выбрано услуг: {selectedServicesCount}</p>
                        </Link>
                    </div>
                    <div className="m-auto">
                        <h1><strong>Услуги издательства</strong></h1>
                    </div>
                    <div className="input-group w-50 m-auto mt-3">
                        <input
                            className="input form-control border-black"
                            onChange={handleSearchServiceTitleChange}
                            type="text"
                            placeholder="Введите наименование услуги"
                            name="book_production_service_name"
                            value={searchBookProductionServiceTitle}>
                        </input>
                        <Button
                            className="btn btn-outline-dark bg-white search-btn"
                            onClick={handleSearchServiceClick}
                        >
                            Поиск
                        </Button>
                    </div>
                </div>
                {
                    isPageActive ?
                        <>
                            {bookProductionServicesList && !!bookProductionServicesList.length ? (
                                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                                    {bookProductionServicesList.map((service, index) => {
                                        const props: IBookProductionServiceListCardProps = {
                                            id: service.pk || 0,
                                            title: service.title,
                                            price: service.price,
                                            imageUrl: service.image_url || "",
                                            updateBPSListPageFunc: updateBPSListPageFunc,
                                        };

                                        return (
                                            <div className="col">
                                                <BookProductionServiceListCard key={index}{...props} />
                                            </div>

                                        )
                                    })}
                                </div>
                            ) : (
                                <Container className="d-flex justify-content-center mt-4 mb-5">
                                    <h2>Ничего не найдено</h2>
                                </Container>
                            )}
                        </>
                        :
                        <>
                            <LoadingAnimation></LoadingAnimation>
                        </>
                }
            </Container>
        </>
    );
};
