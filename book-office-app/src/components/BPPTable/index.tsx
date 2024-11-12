import { FC } from "react";
import { IBPPTableProps } from "./typing.tsx";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export const BPPTable: FC<IBPPTableProps> = (props: IBPPTableProps) => {
    return (
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
                {props.rows.map((row) => (
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
    );
};