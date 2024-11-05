import "/Users/victoria/book-office-app/src/pages/BookProductionServicePage/BookProuctionServicePage.css";
import { Container } from "react-bootstrap";
import { IBookProductionService } from "../../core/api/bookProductionService/typing";
import { IBookProductionServicePageProps } from "./typing";
import { bookProductionServicesList as SERVICES_LIST_MOCK } from "../../core/mock/bookProductionServicesList.ts";
import { getBookProductionServiceById } from "../../core/api/bookProductionService"
import defaultImage from "/Users/victoria/book-office-app/src/images/unknown.jpg";
import { useParams } from "react-router-dom";
import { FC, useEffect, useState } from "react";
import { Breadcrumbs } from "../../components/Breadcrumbs/index.tsx";
import { Navbar } from "../../components/Navbar/index.tsx";

export const BookProductionServicePage: FC<IBookProductionServicePageProps> = () => {
    const { id } = useParams();
    const [bookProductionServiceData, setBookProductionServiceData] = useState<IBookProductionService | null>(null);

    useEffect(() => {
        if (id) {
            getBookProductionServiceById(id).then((data) => {
                setBookProductionServiceData(data)
            })
                .catch(() => {
                    const book_production_service = SERVICES_LIST_MOCK.find(
                        (service) => service.pk === Number(id)
                    );
                    setBookProductionServiceData(book_production_service || null);
                })
        }
    }, [id]);

    if (!bookProductionServiceData || !bookProductionServiceData.title) {
        return (
            <>
                <Navbar />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <Container className="div content-wrapper">
                <Breadcrumbs
                    middleItems={[
                        {
                            name: "Услуги",
                            link: "/book_production_services_list"
                        }
                    ]}
                    endItem={bookProductionServiceData?.title}
                />
                <h1><strong>{bookProductionServiceData?.title}</strong></h1>
                <div className="row mt-4">
                    <div className="col">
                        <p className="h4"><strong>{bookProductionServiceData?.price}</strong></p>
                        <img src={bookProductionServiceData?.image_url ? (bookProductionServiceData?.image_url) : (defaultImage)}
                            alt={bookProductionServiceData?.title}
                            className="rounded mt-3 w-100" />
                    </div>
                    <div className="col">
                        <p className="service-page-description">{bookProductionServiceData?.description}</p>
                    </div>
                </div>
            </Container>
        </>
    );
};