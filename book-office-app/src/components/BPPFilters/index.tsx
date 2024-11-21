import "../../components/BPPFilters/BPPFilters.css"
import { FC } from "react";
import { IBPPFiltersProps } from "./typing.tsx";
import { Button, Card, Form } from "react-bootstrap";
import { useSelector } from "../../core/store/index.ts";
import { selectUser } from "../../core/store/slices/selectors.ts";

export const BPPFilters: FC<IBPPFiltersProps> = (props: IBPPFiltersProps) => {
    const { isManager } = useSelector(selectUser);

    return (
        <Card className="m-3">
            <Card.Body>
                <Form>
                    <div className="d-flex align-items-end justify-content-between">
                        {isManager ?
                            <div className="flex-grow-1 pe-3">
                                <Form.Group controlId="author">
                                    <Form.Label>Автор</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={props.selectedAuthor}
                                        onChange={props.handleAuthorChange}
                                    />
                                </Form.Group>
                            </div> :
                            <>
                            </>
                        }
                        <div className="flex-grow-1 pe-3">
                            <Form.Group controlId="status">
                                <Form.Label>Статус</Form.Label>
                                <Form.Select value={props.selectedStatus} onChange={props.handleStatusChange}>
                                    <option value="">Выберите статус</option>
                                    <option value="FORMED">В работе</option>
                                    <option value="COMPLETED">Завершена</option>
                                    <option value="REJECTED">Отклонена</option>
                                </Form.Select>
                            </Form.Group>
                        </div>
                        <div className="flex-grow-1  pe-3">
                            <Form.Group controlId="startDate">
                                <Form.Label>Дата оформления с</Form.Label>
                                <Form.Control
                                    type="date"
                                    value={props.selectedStartDate}
                                    onChange={props.handleStartDateChange}
                                />
                            </Form.Group>
                        </div>
                        <div className="flex-grow-1  pe-3">
                            <Form.Group controlId="endDate">
                                <Form.Label>Дата оформления по</Form.Label>
                                <Form.Control
                                    type="date"
                                    value={props.selectedEndDate}
                                    onChange={props.handleEndDateChange}
                                />
                            </Form.Group>
                        </div>
                        <Button
                            onClick={props.handleFilterBPPClick}
                            className="btn black-btn"
                        > <strong>Показать</strong>
                        </Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    );
};