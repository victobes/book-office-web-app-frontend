import "./BookPublishingProjectsListPage.css";
import { FC } from "react";
import React, { useState } from 'react';
import { Card, Form, Table, Container } from 'react-bootstrap';
import { IBookPublishingProjectsListPageProps } from "./typing";
import { Navbar } from "../../components/Navbar";
import { Link } from "react-router-dom";

interface TableRow {
    number: number;
    status: string;
    creationDate: string;
    registrationDate: string;
    completionDate: string;
}
export const BookPublishingProjectsListPage: FC<IBookPublishingProjectsListPageProps> = () => {
    // Состояние для выбранного статуса и дат
    const [status, setStatus] = useState<string>('');
    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');
    // Обработчик изменения статуса
    const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setStatus(event.target.value);
    };
    // Обработчики изменения дат
    const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStartDate(event.target.value);
    };
    const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEndDate(event.target.value);
    };
    // Тестовые данные
    const data: TableRow[] = [
        {
            number: 1,
            status: 'Активный',
            creationDate: '2024-01-10',
            registrationDate: '2024-01-15',
            completionDate: '2024-02-01',
        },
        {
            number: 2,
            status: 'Неактивный',
            creationDate: '2024-01-12',
            registrationDate: '2024-01-18',
            completionDate: '2024-02-10',
        },
        {
            number: 3,
            status: 'Ожидает',
            creationDate: '2024-02-05',
            registrationDate: '2024-02-10',
            completionDate: '2024-03-01',
        },
        {
            number: 4,
            status: 'Активный',
            creationDate: '2024-02-01',
            registrationDate: '2024-02-05',
            completionDate: '2024-02-20',
        },
        {
            number: 5,
            status: 'Неактивный',
            creationDate: '2024-01-20',
            registrationDate: '2024-01-22',
            completionDate: '2024-02-15',
        },
    ];
    return (
        <>
            <Navbar />
            <Container>
                <h1 className="m-3">Заявки</h1>
                <Card className="m-3">
                    <Card.Body>
                        <Form>
                            <div className="d-flex align-items-end justify-content-between">
                                <div className="flex-grow-1 pe-3">
                                    <Form.Group controlId="status">
                                        <Form.Label>Статус</Form.Label>
                                        <Form.Select value={status} onChange={handleStatusChange}>
                                            <option value="">Выберите статус</option>
                                            <option value="active">В работе</option>
                                            <option value="inactive">Завершена</option>
                                            <option value="pending">Отклонена</option>
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                                <div className="flex-grow-1  pe-3">
                                    <Form.Group controlId="startDate">
                                        <Form.Label>Дата начала</Form.Label>
                                        <Form.Control
                                            type="date"
                                            value={startDate}
                                            onChange={handleStartDateChange}
                                        />
                                    </Form.Group>
                                </div>
                                <div className="flex-grow-1  pe-3">
                                    <Form.Group controlId="endDate">
                                        <Form.Label>Дата окончания</Form.Label>
                                        <Form.Control
                                            type="date"
                                            value={endDate}
                                            onChange={handleEndDateChange}
                                        />
                                    </Form.Group>
                                </div>
                                <button className="btn dark-blue-btn">
                                    Показать
                                </button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
                <div className="m-3">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>№</th>
                                <th>Статус</th>
                                <th>Дата создания</th>
                                <th>Дата оформления</th>
                                <th>Дата завершения</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row) => (
                                <tr key={row.number}>
                                    <td>
                                        <Link
                                            to={"/book_publishing_project/" + row.number}
                                            className="text-black"
                                        >
                                            {row.number}
                                        </Link>
                                    </td>
                                    <td>{row.status}</td>
                                    <td>{row.creationDate}</td>
                                    <td>{row.registrationDate}</td>
                                    <td>{row.completionDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </Container>
        </>
    );
};