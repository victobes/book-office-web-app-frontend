import "./BookPublishingProjectPage.css";
import { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IBookPublishingProjectPageProps } from "./typing";
import { Navbar } from "../../components/Navbar";
import { Container } from "react-bootstrap";
import { bookPublishingProject as PROJECT_MOCK } from "../../core/mock/bookPublishingProject.ts";
import { SelectedServiceCard } from "../../components/SelectedServiceCard/index.tsx";
import { ISelectedServiceCardProps } from "../../components/SelectedServiceCard/typing.tsx";
import { Breadcrumbs } from "../../components/Breadcrumbs/index.tsx";
import { api } from "../../core/api";
import { FullBookPublishingProject, Related } from "../../core/api/Api.ts";

export const BookPublishingProjectPage: FC<IBookPublishingProjectPageProps> = () => {
    const { id } = useParams();
    const [bookPublishingProjectContentData, setBookPublishingProjectContentData] =
        useState<FullBookPublishingProject>();

    useEffect(() => {
        if (id) {
            api.bookPublishingProject.bookPublishingProjectRead(id)
                .then((data) => {
                    setBookPublishingProjectContentData(data.data);
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
                <div className="content-wrapper">
                    <Breadcrumbs
                        middleItems={[
                            {
                                name: "Услуги",
                                link: "/book_production_services_list"
                            }
                        ]}
                        endItem={"Проект №" + bookPublishingProjectContentData?.pk}
                    />
                    <div className="col">
                        <div className="row mb-3 title-container">
                            <p className="h1"><strong>Проект №{bookPublishingProjectContentData?.pk}</strong></p>
                        </div>
                        <div className="row mb-3">
                            <div className="col-3">
                                <p className="h3"><strong>Формат:</strong></p>
                            </div>
                            <div className="col-9">
                                <select className="format-select" name="format_info">
                                    <option value="A4" selected>A4</option>
                                    <option value="A5">A5</option>
                                    <option value="A6">A6</option>
                                    <option value="B5">B5</option>
                                    <option value="SQUARE">Квадрат</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-3">
                                <p className="h3"><strong>Тираж:</strong></p>
                            </div>
                            <div className="col-9">
                                <input type="text" className="form-control" aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-default"
                                    value={bookPublishingProjectContentData?.circulation?.toString()} readOnly />
                            </div>
                        </div>
                    </div>

                    {bookPublishingProjectContentData?.services_list && !!bookPublishingProjectContentData.services_list.length ? (
                        <div className="col-md-2 w-100">
                            {bookPublishingProjectContentData.services_list.map((service: Related, index: number) => {
                                const props: ISelectedServiceCardProps = {
                                    id: service.service.pk,
                                    title: service.service.title,
                                    price: service.service.price,
                                    imageUrl: service.service.image_url || undefined, // TODO: Что-то тут не так
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
                    <div className="d-flex justify-content-center">
                        <button type="button" className="btn p-2 text-white bg-black"><strong>Оформить</strong></button>
                    </div>
                </div>
            </Container>
        </>
    );
};