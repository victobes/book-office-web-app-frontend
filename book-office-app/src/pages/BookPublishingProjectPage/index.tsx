import "./BookPublishingProjectPage.css";
import { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IBookPublishingProjectPageProps } from "./typing";
import { Navbar } from "../../components/Navbar";
import { Container } from "react-bootstrap";
import { IBookPublishingProjectByIdResponse } from "../../core/api/bookProductionService/typing.ts";
import { bookPublishingProject as PROJECT_MOCK} from "../../core/mock/bookPublishingProject.ts";
import { getBookPublishingProjectById } from "../../core/api/bookProductionService";
import { SelectedServiceCard } from "../../components/SelectedServiceCard/index.tsx";
import { ISelectedServiceCardProps } from "../../components/SelectedServiceCard/typing.tsx";
import { Breadcrumbs } from "../../components/Breadcrumbs/index.tsx";

export const BookPublishingProjectPage: FC<IBookPublishingProjectPageProps> = () => {
    const { id } = useParams();
    const [bookPublishingProjectContentData, setBookPublishingProjectContentData] =
        useState<IBookPublishingProjectByIdResponse>();

    useEffect(() => {
        if (id) {
            getBookPublishingProjectById(id)
                .then((data) => {
                    setBookPublishingProjectContentData(data);
                })
                .catch(() => {
                    setBookPublishingProjectContentData(PROJECT_MOCK)
                });
        }
    }, [id]);


    return (
        <>
            <Navbar />
            <Container>
                <div className="order-page-content-container">
                <Breadcrumbs
                    middleItems={[
                        {
                            name: "Услуги",
                            link: "/book_production_services_list"
                        }
                    ]}
                    endItem={"Проект №" + bookPublishingProjectContentData?.pk}
                />
                    <p className="order-page-title">Проект №{bookPublishingProjectContentData?.pk}</p>
                    <div className="order-info-content-container">
                        <p className="order-info-field-title">Формат:</p>
                        <select className="format-select" name="format_info">
                            <option value="A4" selected>A4</option>
                            <option value="A5">A5</option>
                            <option value="A6">A6</option>
                            <option value="B5">B5</option>
                            <option value="SQUARE">Квадрат</option>
                        </select>
                        <p className="order-info-field-title">Тираж (шт.):</p>
                        {/* <input className="order-info-input" type="number" name="circulation_info" value="{{ data.circulation }}"> */}
                    </div>

                    {bookPublishingProjectContentData?.services_list && !!bookPublishingProjectContentData.services_list.length ? (
                        <div className="row row-cols-1 row-cols-md-2
                    row-cols-lg-4 g-4">
                            {bookPublishingProjectContentData.services_list.map((service, index) => {
                                const props: ISelectedServiceCardProps = {
                                    id: service.service.pk,
                                    title: service.service.title,
                                    price: service.service.price,
                                    imageUrl: service.service.image_url,
                                    rate: service.rate,
                                };
                                return (
                                    <div className="col">
                                        <SelectedServiceCard key={index} {...props} /> 
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <Container className="d-flex justify-content-center mt-4 mb-5">
                            <h2>Проект Пустой</h2>
                        </Container>
                    )}
                </div>
            </Container>
        </>
    );
};