import React, { useEffect, useState } from "react";
import { IBPPFiltersProps } from "../../components/BPPFilters/typing.tsx";
import { IBPPTableProps, IBPPTableRow } from "../../components/BPPTable/typing.tsx";
import { api } from "../../core/api/index.ts";
import { BookPublishingProject } from "../../core/api/Api.ts";

import { bookPublishingProjectsList as BOOK_PUBLISHING_PROJECTS_LIST_MOCK } from "../../core/mock/bookPublishingProjectsList.ts";

import { useDispatch, useSelector } from "../../core/store/index.ts";
import { selectApp } from "../../core/store/slices/selectors.ts";
import {
    saveFilterISRAuthor,
    saveFilterBPPStatus,
    saveFilterBPPStartDate,
    saveFilterBPPEndDate
} from "../../core/store/slices/appSlice.ts";

export const useBookPublishingProjectsListPage = () => {
    const [tableProps, setTableProps] = useState<IBPPTableProps>({ 
        rows: [], updateListPageFunc: () => {
    } });

    const { filterISRAuthor, filterBPPStatus, filterBPPStartDate, filterBPPEndDate } = useSelector(selectApp);
    const dispatch = useDispatch();

    const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(saveFilterBPPStatus(event.target.value))
    };

    const handleAuthorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(saveFilterISRAuthor(event.target.value))
    };

    const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(saveFilterBPPStartDate(event.target.value))
    };
    
    const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(saveFilterBPPEndDate(event.target.value))
    };


    const handleFilterBPPClick = () => {
        console.log(filterBPPStatus, mapStringToOptQueryParam(filterBPPStatus), filterBPPStartDate, filterBPPEndDate);
        api.bookPublishingProject.bookPublishingProjectList(
            {
                status: mapStringToOptQueryParam(filterBPPStatus),
                formation_start: mapStringToOptQueryParam(filterBPPStartDate),
                formation_end: mapStringToOptQueryParam(filterBPPEndDate),
            })
            .then((data) => {
                // setTableProps(mapBackendResultToTableData(data.data))
                setTableProps(
                    {
                        rows: filterAndConvertData(data.data, filterISRAuthor),
                        updateListPageFunc: handleFilterBPPClick,
                    })
            })
            .catch(() => {
                setTableProps(
                    // mapBackendResultToTableData(
                    //     filterDataOnFront(BOOK_PUBLISHING_PROJECTS_LIST_MOCK,
                    //         mapStringToOptQueryParam(filterBPPStatus),
                    //         mapStringToOptQueryParam(filterBPPStartDate),
                    //         mapStringToOptQueryParam(filterBPPEndDate))
                    // )
                    {
                        rows: filterAndConvertData(
                            filterDataOnFront(BOOK_PUBLISHING_PROJECTS_LIST_MOCK,
                                mapStringToOptQueryParam(filterBPPStatus),
                                mapStringToOptQueryParam(filterBPPStartDate),
                                mapStringToOptQueryParam(filterBPPEndDate),
                            ), filterISRAuthor),
                        updateListPageFunc: handleFilterBPPClick,
                    }
                );
            })
    };

    // Short Polling
    useEffect(() => {
        let id = setTimeout(handleFilterBPPClick, 2000);
        return () => clearTimeout(id);
    });

    useEffect(handleFilterBPPClick, []);

    const filtersProps: IBPPFiltersProps = {
        selectedStatus: filterBPPStatus,
        selectedStartDate: filterBPPStartDate,
        selectedEndDate: filterBPPEndDate,
        selectedAuthor: filterISRAuthor,
        handleAuthorChange: handleAuthorChange,
        handleStatusChange: handleStatusChange,
        handleStartDateChange: handleStartDateChange,
        handleEndDateChange: handleEndDateChange,
        handleFilterBPPClick: handleFilterBPPClick,
    };

const b: boolean = false;

return { tableProps, filtersProps, b };
};

function mapStringToOptQueryParam(str?: string): string | undefined {
    if (str == "") {
        return undefined;
    }
    return str;
}

function mapStatusToTable(status?: string): string {
    switch (status) {
        case "FORMED":
            return "В работе";
        case "COMPLETED":
            return "Завершен";
        case "REJECTED":
            return "Отклонен";
        default:
            return "Неизвестен";
    }
}
function convertDatetimeToDDMMYYYY(dateString: string | null | undefined): string {
    if (!dateString) return "";
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
}
// export function mapBackendResultToTableData(requests: BookPublishingProject[]): IBPPTableProps {
//     const rows: IBPPTableRow[] = requests.map((request) => {
    export function filterAndConvertData(requests: BookPublishingProject[], 
        customerFilter: string | undefined): IBPPTableRow[] {
        const filteredRequests = customerFilter
            ? requests.filter((request) => request.customer === customerFilter)
            : requests;

        return filteredRequests.map((request) => {
        return {
            number: request.pk || 0,
            customer: request.customer || "",
            status: mapStatusToTable(request.status),
            creationDate: convertDatetimeToDDMMYYYY(request.creation_datetime),
            registrationDate: convertDatetimeToDDMMYYYY(request.formation_datetime),
            completionDate: convertDatetimeToDDMMYYYY(request.completion_datetime),
        };
    });

    // return {rows};
}

export function filterDataOnFront(
    bookPublishingProjectsList: BookPublishingProject[],
    filterStatus?: string,
    filterStartDate?: string,
    filterEndDate?: string
): BookPublishingProject[] {
    return bookPublishingProjectsList.filter((row) => {
        let matchesStatus = true;
        let matchesStartDate = true;
        let matchesEndDate = true;
        if (filterStatus) {
            matchesStatus = row.status === filterStatus;
        }
        if (filterStartDate && row.formation_datetime) {
            matchesStartDate = new Date(row.formation_datetime) >= new Date(filterStartDate);
        }
        if (filterEndDate && row.formation_datetime) {
            matchesEndDate = new Date(row.formation_datetime) <= new Date(filterEndDate);
        }
        return matchesStatus && matchesStartDate && matchesEndDate;
    })
}