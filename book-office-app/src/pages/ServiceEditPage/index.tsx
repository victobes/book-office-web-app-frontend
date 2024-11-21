import "./ServiceEditPage.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";
// import { bookProductionServicesList as SERVICES_LIST_MOCK } from "../../core/mock/bookProductionServicesList.ts";
import { BookProductionService } from "../../core/api/Api.ts";
import { api } from "../../core/api";
import { store } from "../../core/store";
import { addNotification } from "../../core/store/slices/appSlice.ts";
import unknownImage from "/unknown.jpg"

export const ServiceEditPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [imageUrl, setImageUrl] = useState<File | null>(null);
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
        }
    }, [id]);
    if (!service || !service.title) {
        return (
            <>
            </>
        );
    }

    // Функция для обработки изменений в input полях
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

    const handleSubmit = () => {
        if (imageUrl != null) {
            console.log(imageUrl)
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
                        message: "Ошибка обновления данных об услуге",
                        isError: true,
                    })
                );
            }
            )
    };

    return (
        <div className="container">
            <h2 className="mb-3">Редактирование услуги</h2>
            <Row>
                <Col md={6}>
                    <Form.Group controlId="formTitle" className="mb-3">
                        <Form.Label>Название</Form.Label>
                        <Form.Control
                            type="text"
                            name="title"
                            value={service.title}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formPrice" className="mb-3">
                        <Form.Label>Стоимость услуги</Form.Label>
                        <Form.Control
                            type="text"
                            name="title"
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
                        <Form.Label>Описание</Form.Label>
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
            <Button
                type="button"
                className="mt-3 mb-3 black-btn"
                onClick={handleSubmit}
            >
                Сохранить изменения
            </Button>
        </div>
    );
};