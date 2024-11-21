import { FC } from "react";
import { BPPTableItemProps } from "./typing.tsx";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { store, useSelector } from "../../core/store";
import { selectUser } from "../../core/store/slices/selectors.ts";
import { api } from "../../core/api";
import { addNotification } from "../../core/store/slices/appSlice.ts";

export const BPPTableItem: FC<BPPTableItemProps> = (project: BPPTableItemProps) => {
    const { isManager } = useSelector(selectUser);

    const handleCompleteClick = () => {
        api.bookPublishingProject.bookPublishingProjectResolveUpdate(
            project.pk.toString(),
            {
                status: "COMPLETED"
            })
            .then(() => {
                store.dispatch(
                    addNotification({
                        message: "Проект согласован",
                        isError: false,
                    })
                );
                project.updateListPageFunc()
            })
            .catch(() => {
                store.dispatch(
                    addNotification({
                        message: "Ошибка согласования",
                        isError: true,
                    })
                );
            }
            )
    }
    const handleRejectClick = () => {
        api.bookPublishingProject.bookPublishingProjectResolveUpdate(
            project.pk.toString(),
            {
                status: "REJECTED"
            })
            .then(() => {
                store.dispatch(
                    addNotification({
                        message: "Проект отклонен",
                        isError: false,
                    })
                );
                project.updateListPageFunc()
            })
            .catch(() => {
                store.dispatch(
                    addNotification({
                        message: "Ошибка отклонения проекта",
                        isError: true,
                    })
                );
            }
            )
    }

    return (
        <Card key={project.pk} className="mb-2">
            <Card.Body className="py-2 px-3">
                <Row className="d-flex align-items-center row-with-separators">
                    <Col>
                        <Card.Text>
                            <Link to={"/book_publishing_project/" + project.pk} className="text-black">
                                {project.pk}
                            </Link>
                        </Card.Text>
                    </Col>
                    {isManager ?
                        <>
                            <Col>
                                <Card.Text className="text-center">
                                    {project.customer}
                                </Card.Text>
                            </Col>
                        </> :
                        <>
                        </>
                    }
                    <Col>
                        <Card.Text className="text-center">
                            {project.status}
                        </Card.Text>
                    </Col>
                    <Col>
                        <Card.Text className="text-center">
                            {project.creationDate}
                        </Card.Text>
                    </Col>
                    <Col>
                        <Card.Text className="text-center">
                            {project.registrationDate}
                        </Card.Text>
                    </Col>
                    <Col>
                        <Card.Text className="text-center">
                            {project.completionDate}
                        </Card.Text>
                    </Col>
                    {isManager?
                        <>
                            <Col>
                                <Button
                                    onClick={handleCompleteClick}
                                    className={`black-btn ${project.status !== "В работе" ? ":disabled" : ""}`}
                                    disabled={project.status != "В работе"}
                                >
                                    Завершить
                                </Button>
                            </Col>
                            <Col>
                                <Button
                                    onClick={handleRejectClick}
                                    className="outlined-btn"
                                    disabled={project.status != "В работе"}
                                >
                                    Отклонить
                                </Button>
                            </Col>
                        </> :
                        <>
                        </>
                    }
                </Row>
            </Card.Body>
        </Card>
    )

}
