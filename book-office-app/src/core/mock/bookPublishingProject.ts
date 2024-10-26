import { IBookPublishingProjectByIdResponse } from "../api/bookProductionService/typing";

export const bookPublishingProject: IBookPublishingProjectByIdResponse =
{
    pk: 1,
    creation_datetime: "2024-10-24T15:20:14.219Z",
    formation_datetime: "2024-10-24T15:20:14.219Z",
    completion_datetime: "2024-10-24T15:20:14.219Z",
    format: "A5",
    circulation: 50000,
    customer: 0,
    manager: 0,
    personal_discount: 10,
    status: "DRAFT",
    services_list: [
        {
            service: {
                pk: 4,
                title: "Иллюстрирование",
                image_url: "http://localhost:9000/book-office-services-images/4.jpg",
                price: "от 1200 руб.",
            },
            rate: "BASE"
        },
        {
            service: {
                pk: 3,
                title: "Вёрстка книги",
                image_url: "http://localhost:9000/book-office-services-images/3.jpg",
                price: "от 65 руб. за 1 страницу",
            },
            rate: 'Тариф "Базовый"'
        },
        {
            service: {
                pk: 1,
                title: "Корректура текста",
                image_url: "http://localhost:9000/book-office-services-images/1.jpg",
                price: "от 45 руб. за 1000 символов",
            },
            rate: 'Тариф "Базовый"'
        },
    ]
};