import "./BookPublishingProjectsListPage.css";
import { FC } from "react";
import { Container } from "react-bootstrap";
import { IBookPublishingProjectsListPageProps } from "./typing";
import { Navbar } from "../../components/Navbar";
import { BPPFilters } from "../../components/BPPFilters";
import { useBookPublishingProjectsListPage } from "./useBookPublishingProjectsListPage";
import { BPPTable } from "../../components/BPPTable";

export const BookPublishingProjectsListPage: FC<IBookPublishingProjectsListPageProps> = () => {
   const {tableProps, filtersProps} = useBookPublishingProjectsListPage();

    return (
        <>
            <Navbar />
            <Container>
                <h1 className="m-3">Заявки</h1>
                <BPPFilters {...filtersProps}></BPPFilters>
                <div className="m-3">
                    <BPPTable {...tableProps}></BPPTable>
                </div>
            </Container>
        </>
    );
};