import { useEffect, useState } from "react";
import { IBookProductionService } from "../../core/api/bookProductionService/typing.tsx";
import { getBookProductionServicesList } from "../../core/api/bookProductionService/index.ts";
import { selectApp } from "../../core/store/slices/selectors.ts";
import { useSelector, useDispatch } from "../../core/store/index.ts";

import { bookProductionServicesList as SERVICES_LIST_MOCK } from "../../core/mock/bookProductionServicesList.ts";
import { bookPublishingProject as PROJECT_MOCK } from "../../core/mock/bookPublishingProject.ts";

import { ChangeEvent } from "../../App.typing";
import { saveBookProductionServiceTitle } from "../../core/store/slices/appSlice.ts";

export const useBookProductionServicesListPage = () => {
    const [bookProductionServicesList, setBookProductionServicesList] = useState<IBookProductionService[]>([]);
    const { searchBookProductionServiceTitle } = useSelector(selectApp);
    const dispatch = useDispatch();

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
        dispatch(saveBookProductionServiceTitle(e.target.value))
    };

    useEffect(() => {
        getBookProductionServicesList(searchBookProductionServiceTitle)
            .then((data) => {
                setBookProductionServicesList(data.book_production_services);
                setBookPublishingProjectId(data.book_publishing_project_id)
                setSelectedServicesCount(data.selected_services_count)
            })
            .catch(() => {
                const filteredBookProductionServices = SERVICES_LIST_MOCK.filter((service) =>
                    service.title.toLowerCase().startsWith(searchBookProductionServiceTitle.toLowerCase())
                );
                setBookProductionServicesList(filteredBookProductionServices);
                setBookPublishingProjectId(PROJECT_MOCK.pk)
                setSelectedServicesCount(PROJECT_MOCK.services_list.length)
            });
    }, []);

    useEffect(() => {
        if (bookProductionServicesList && bookProductionServicesList.length) {
        }
    }, [bookProductionServicesList]);

    return {
        bookProductionServicesList,
        bookPublishingProjectId,
        searchBookProductionServiceTitle,
        selectedServicesCount,
        handleSearchServiceClick,
        handleSearchServiceTitleChange,
    };
};