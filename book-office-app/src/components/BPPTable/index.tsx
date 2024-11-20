import "../../components/BPPTable/BPPTable.css"
import { FC } from "react";
import { IBPPTableProps } from "./typing.tsx";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const BPPTable: FC<IBPPTableProps> = (props: IBPPTableProps) => {
    return (
        // <Table striped bordered hover>
        //     <thead>
        //         <tr>
        //             <th>№</th>
        //             <th>Статус</th>
        //             <th>Дата создания</th>
        //             <th>Дата оформления</th>
        //             <th>Дата завершения</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         {props.rows.map((row) => (
        //             <tr key={row.number}>
        //                 <td>
        //                     <Link
        //                         to={"/book_publishing_project/" + row.number}
        //                         className="text-black"
        //                     >
        //                         {row.number}
        //                     </Link>
        //                 </td>
        //                 <td>{row.status}</td>
        //                 <td>{row.creationDate}</td>
        //                 <td>{row.registrationDate}</td>
        //                 <td>{row.completionDate}</td>
        //             </tr>
        //         ))}
        //     </tbody>
        // </Table>
        <div>
            <Card className="mb-2">
                <Card.Body className="py-2 px-3">
                    <Row className="d-flex align-items-center row-with-separators">
                        <Col xs={12} sm={2}>
                            <Card.Text><strong>№</strong></Card.Text>
                        </Col>
                        <Col xs={12} sm={4}>
                            <Card.Text className="text-center"><strong>Статус</strong></Card.Text>
                        </Col>
                        <Col xs={12} sm={2}>
                            <Card.Text className="text-center"><strong>Дата создания</strong></Card.Text>
                        </Col>
                        <Col xs={12} sm={2}>
                            <Card.Text className="text-center"><strong>Дата оформления</strong></Card.Text>
                        </Col>
                        <Col xs={12} sm={2}>
                            <Card.Text className="text-center"><strong>Дата завершения</strong></Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

            {props.rows.map((row) => (
                <Card key={row.number} className="mb-2">
                    <Card.Body className="py-2 px-3">
                        <Row className="d-flex align-items-center row-with-separators">
                            <Col xs={12} sm={2}>
                                <Card.Text>
                                    <Link to={"/book_publishing_project/" + row.number} className="text-black">
                                        {row.number}
                                    </Link>
                                </Card.Text>
                            </Col>
                            <Col xs={12} sm={4}>
                                <Card.Text className="text-center">
                                    {row.status}
                                </Card.Text>
                            </Col>
                            <Col xs={12} sm={2}>
                                <Card.Text className="text-center">
                                    {row.creationDate}
                                </Card.Text>
                            </Col>
                            <Col xs={12} sm={2}>
                                <Card.Text className="text-center">
                                    {row.registrationDate}
                                </Card.Text>
                            </Col>
                            <Col xs={12} sm={2}>
                                <Card.Text className="text-center">
                                    {row.completionDate}
                                </Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};