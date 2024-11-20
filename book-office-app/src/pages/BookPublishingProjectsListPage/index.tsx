import "./BookPublishingProjectsListPage.css";
import { Container } from "react-bootstrap";
import { Navbar } from "../../components/Navbar";
import { BPPFilters } from "../../components/BPPFilters";
import { useBookPublishingProjectsListPage } from "./useBookPublishingProjectsListPage";
import { BPPTable } from "../../components/BPPTable";

export const BookPublishingProjectsListPage = () => {
   const {tableProps, filtersProps} = useBookPublishingProjectsListPage();

    return (
        <>
            <Navbar />
            <Container>
                <h1 className="m-3 header-style"><strong>Мои проекты</strong></h1>
                <BPPFilters {...filtersProps}></BPPFilters>
                <div className="m-3">
                    <BPPTable {...tableProps}></BPPTable>
                </div>
            </Container>
        </>
    );
};