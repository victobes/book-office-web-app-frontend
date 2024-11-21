import "../../components/BPPTable/BPPTable.css"
import { FC } from "react";
import { IBPPTableProps } from "./typing.tsx";
import { Card, Col, Row } from "react-bootstrap";

import { useSelector } from "../../core/store/index.ts";
import { selectUser } from "../../core/store/slices/selectors.ts";
import { BPPTableItemProps } from "../BPPTableItem/typing.tsx";
import { BPPTableItem } from "../BPPTableItem/index.tsx";

export const BPPTable: FC<IBPPTableProps> = (tableProps: IBPPTableProps) => {
    const {isManager} = useSelector(selectUser);

    return (
        <div>
            <Card className="mb-2">
                <Card.Body className="py-2 px-3">
                    <Row className="d-flex align-items-center row-with-separators">
                        <Col>
                            <Card.Text><strong>№</strong></Card.Text>
                        </Col>
                        {isManager ?
                            <>
                                <Col>
                                    <Card.Text className="text-center"><strong>Автор</strong></Card.Text>
                                </Col>
                            </> :
                            <>
                            </>
                            }
                        {/* <Col></Col> */}
                        <Col>
                            <Card.Text className="text-center"><strong>Статус</strong></Card.Text>
                        </Col>
                        <Col>
                            <Card.Text className="text-center"><strong>Дата создания</strong></Card.Text>
                        </Col>
                        <Col>
                            <Card.Text className="text-center"><strong>Дата оформления</strong></Card.Text>
                        </Col>
                        <Col>
                            <Card.Text className="text-center"><strong>Дата завершения</strong></Card.Text>
                        </Col>
                        {isManager ?
                            <>
                                <Col>
                                    <Card.Text className="text-center"><strong>Завершить</strong></Card.Text>
                                </Col>
                                <Col>
                                    <Card.Text className="text-center"><strong>Отклонить</strong></Card.Text>
                                </Col>
                            </> :
                            <>
                            </>}
                    </Row>
                </Card.Body>
            </Card>

            <>
                {tableProps.rows.map((row, index) => {
                    const props: BPPTableItemProps = {
                        pk: row.number,
                        status: row.status,
                        creationDate: row.creationDate,
                        registrationDate: row.registrationDate,
                        completionDate: row.completionDate,
                        customer: row.customer,
                        updateListPageFunc: tableProps.updateListPageFunc,
                    };
                    return (
                        <BPPTableItem key={index} {...props}/>
                    );
                })}
            </>
        </div>
    );
};