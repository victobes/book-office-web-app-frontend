import "./BookProductionServicesEditableListPage.css";
import { Navbar } from "../../components/Navbar";
import { Button, Container } from "react-bootstrap";
import { useBookProductionServicesEditableListPage } from "./useBookProductionServicesEditableListPage";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { LoadingAnimation } from "../../components/LoadingAnimation";
import { ServiceManagerCard } from "../../components/ServiceManagerCard";
import { IServiceManagerCardProps } from "../../components/ServiceManagerCard/typing";

export const BookProductionServicesEditableListPage = () => {
    const {
        bookProductionServicesList,
        searchInListBookProductionServiceTitle,
        isPageActive,
        updateBPSListPageFunc,
        handleSearchServiceClick,
        handleSearchServiceTitleChange,
    } = useBookProductionServicesEditableListPage();

    return (
        <>
            <Navbar />
            <Container>
                <Breadcrumbs
                    endItem="Услуги"
                />
                <div
                    className="d-flex flex-column mt-4 mb-4 p-0"
                >
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
                            value={searchInListBookProductionServiceTitle}>
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
                                    <div>
                                        {bookProductionServicesList.map((service, index) => {
                                            const props: IServiceManagerCardProps = {
                                                id: service.pk || 0,
                                                title: service.title,
                                                price: service.price,
                                                imageUrl: service.image_url || "",
                                                updateBPSListPageFunc: updateBPSListPageFunc,
                                            };
                                            return (
                                                <ServiceManagerCard key={index} {...props} />
                                            );
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
                 
                    <div className="d-flex justify-content-end">
                        <Link
                            to={"/add_service/"}
                            className="btn black-btn"
                        >
                            <strong>Добавить услугу</strong>
                        </Link>
                    </div>
            </Container>
        </>
    );
};
