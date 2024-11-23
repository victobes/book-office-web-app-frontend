import "./ServiceEditPage.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";
import { BookProductionService } from "../../core/api/Api.ts";
import { api } from "../../core/api";
import { store } from "../../core/store";
import { addNotification } from "../../core/store/slices/appSlice.ts";
import unknownImage from "/unknown.jpg"
import axios from "axios";
import { Navbar } from "../../components/Navbar";
import { Container } from "react-bootstrap";
import { Breadcrumbs } from "../../components/Breadcrumbs/index.tsx";

export const ServiceEditPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [imageUrl, setImageUrl] = useState<File | null>(null);
    const [isEdit, setIsEdit] = useState<boolean>(false);

    const [service, setService] = useState<BookProductionService>({
        title: '',
        price: '',
        description: '',
        image_url: '',
        is_active: true
    });

    useEffect(() => {
        if (id) {
            api.bookProductionService.bookProductionServiceRead(id)
                .then((data) => {
                    setService(data.data);
                })
                .catch(() => {
                    store.dispatch(
                        addNotification({
                            message: "Ошибка получения данных об услуге",
                            isError: true,
                        })
                    );
                });
            setIsEdit(true);
        }
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setService({
            ...service,
            [name]: value,
        });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        setImageUrl(file);
    };

    const createService = async () => {
        try {
            const data = await api.bookProductionService.bookProductionServicePostCreate(service)
            if (imageUrl != null) {
                api.bookProductionService.bookProductionServiceAddImageCreate(data.data.pk?.toString() || "", { image: imageUrl })
                    .then(() => {
                        store.dispatch(
                            addNotification({
                                message: "Услуга успешно добавлена",
                                isError: false,
                            })
                        );
                        navigate('/book_production_service/' + data.data.pk?.toString() || "");
                    })
                    .catch(() => {
                        store.dispatch(
                            addNotification({
                                message: "Ошибка загрузки файла",
                                isError: true,
                            })
                        );
                    }
                    )
            } else {
                store.dispatch(
                    addNotification({
                        message: "Услуга успешно добавлена",
                        isError: false,
                    })
                );
                navigate('/book_production_service/' + data.data.pk?.toString() || "");
            }
            return
        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.status == 400) {
                store.dispatch(
                    addNotification({
                        message: "Заполнены не все обязательные поля",
                        isError: true,
                    })
                );
            } else {
                store.dispatch(
                    addNotification({
                        message: "Ошибка сервера",
                        isError: true,
                    })
                );
            }
            return
        }
    }

    const handleSubmit = () => {
        if (isEdit) {
            api.bookProductionService.bookProductionServicePutUpdate(service.pk?.toString() || "", service)
                .then(() => {
                    store.dispatch(
                        addNotification({
                            message: "Данные об услуге обновлены",
                            isError: false,
                        })
                    );
                    navigate('/book_production_service/' + service.pk?.toString() || "");
                })
                .catch(() => {
                    store.dispatch(
                        addNotification({
                            message: "Ошибка изменения услуги",
                            isError: false,
                        })
                    );
                }
                )
            if (imageUrl != null) {
                api.bookProductionService.bookProductionServiceAddImageCreate(service.pk?.toString() || "", { image: imageUrl })
                    .then(() => {
                    })
                    .catch(() => {
                        store.dispatch(
                            addNotification({
                                message: "Ошибка загрузки файла",
                                isError: true,
                            })
                        );
                    }
                    )
            }
            return
        }
        createService()
            .then(() => { })
            .catch(() => { })
    };

    return (
        <>
            <Navbar />
            <Container>
            <Breadcrumbs
                    middleItems={[
                        {
                            name: "Список услуг",
                            link: "/services_list"
                        }
                    ]}
                    endItem={isEdit ? "Редактирование услуги" : "Добавление услуги"}
                />
                <div className="container">
                    <h2 className="mb-3"><strong>{isEdit ? "Редактирование услуги" : "Добавление услуги"}</strong></h2>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="formTitle" className="mb-3">
                                <Form.Label>Название <sup className="text-danger">*</sup></Form.Label>
                                <Form.Control
                                    type="text"
                                    name="title"
                                    value={service.title}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formPrice" className="mb-3">
                                <Form.Label>Стоимость услуги <sup className="text-danger">*</sup></Form.Label>
                                <Form.Control
                                    type="text"
                                    name="price"
                                    value={service.price}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formFile">
                                <Form.Label>Картинка</Form.Label>
                                <Form.Control
                                    type="file"
                                    onChange={handleFileChange}
                                    accept="image/*"
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6} className="">
                            {service.image_url && (
                                <img
                                    src={service.image_url ? (service.image_url) : (unknownImage)}
                                    alt="Logo"
                                    className="img-fluid p-2"
                                    style={{ maxWidth: '300px', maxHeight: '300px', objectFit: 'contain' }}
                                />
                            )}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="formDescription" className="mb-3">
                                <Form.Label>Описание <sup className="text-danger">*</sup></Form.Label>
                                <Form.Control
                                    as="textarea"
                                    name="description"
                                    value={service.description}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <div>
                        <sup className="text-danger">*</sup> — обязательные поля
                    </div>
                    <Button
                        type="button"
                        className="mt-3 mb-3 black-btn"
                        onClick={handleSubmit}
                    >
                        <strong>{isEdit ? "Сохранить изменения" : "Сохранить"}</strong>
                    </Button>
                </div>
            </Container>
        </>
    );
};