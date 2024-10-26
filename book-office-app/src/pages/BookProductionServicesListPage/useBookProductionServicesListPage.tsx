import { useEffect, useState } from "react";
import { IBookProductionService } from "../../core/api/bookProductionService/typing.tsx";
import { getBookProductionServicesList } from "../../core/api/bookProductionService/index.ts";
import { bookProductionServicesList as SERVICES_LIST_MOCK } from "../../core/mock/bookProductionServicesList.ts";
// import { bookPublishingProject as PROJECT_MOCK } from "../../core/mock/bookPublishingProject.ts";
import { ChangeEvent } from "../../App.typing";

export const useBookProductionServicesListPage = () => {
    const [bookProductionServicesList, setBookProductionServicesList] = useState<IBookProductionService[]>([]);
    const [searchBookProductionServiceTitle, setBookProductionServiceTitle] = useState("");
    
    const [bookPublishingProjectId, setBookPublishingProjectId] = useState<number>();
    const [selectedServicesCount, setSelectedServicesCount] = useState<number>(0);

    const handleSearchServiceClick = () => {
        getBookProductionServicesList(searchBookProductionServiceTitle)
            .then((data) => {
                setBookProductionServicesList(data.book_production_services);
            })
            .catch(() => {
                const filteredBookProductionServices = SERVICES_LIST_MOCK.filter((book_production_service) =>
                    book_production_service.title.toLowerCase().startsWith(searchBookProductionServiceTitle.toLowerCase())
                );
                setBookProductionServicesList(filteredBookProductionServices);
            });
    };

    const handleSearchServiceTitleChange = (e: ChangeEvent) => {
        setBookProductionServiceTitle(e.target.value);
    };

    useEffect(() => {
        getBookProductionServicesList()
            .then((data) => {
                setBookProductionServicesList(data.book_production_services);
                setSelectedServicesCount(0)
                // setBookPublishingProjectId(data.book_publishing_project_id)
                // setSelectedServicesCount(data.selected_services_count)
            })
            .catch(() => {
                setBookProductionServicesList(SERVICES_LIST_MOCK)
                setSelectedServicesCount(0)
                // setBookPublishingProjectId(1)
                // setSelectedServicesCount(PROJECT_MOCK.services_list.length)
            });
    }, []);

    useEffect(() => {
        if (bookProductionServicesList && bookProductionServicesList.length) {
        }
    }, [bookProductionServicesList]);

    return {
        bookProductionServicesList,
        bookPublishingProjectId,
        selectedServicesCount,
        handleSearchServiceClick,
        handleSearchServiceTitleChange,
    };
};