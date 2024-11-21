import { useEffect, useState } from "react";
import { selectApp, selectUser} from "../../core/store/slices/selectors.ts";
import { useSelector, useDispatch } from "../../core/store/index.ts";

import { bookProductionServicesList as SERVICES_LIST_MOCK } from "../../core/mock/bookProductionServicesList.ts";
import { bookPublishingProject as PROJECT_MOCK } from "../../core/mock/bookPublishingProject.ts";

import { ChangeEvent } from "../../App.typing";
import { saveBookProductionServiceTitle } from "../../core/store/slices/appSlice.ts";
import { api } from "../../core/api";
import { BookProductionService } from "../../core/api/Api.ts";

export const useBookProductionServicesListPage = () => {
    const [bookProductionServicesList, setBookProductionServicesList] = useState<BookProductionService[]>([]);
    const [BPPId, setBPPId] = useState(1);
    const [selectedServicesCount, setSelectedServicesCount] = useState<number>(0);

    const [isPageActive, setIsPageActive] = useState(false);
    const { searchBookProductionServiceTitle } = useSelector(selectApp);
    const {isManager} = useSelector(selectUser);
    const dispatch = useDispatch();

    const handleSearchServiceClick = () => {
         setIsPageActive(false)
        api.bookProductionService.bookProductionServiceList({book_production_service_name: searchBookProductionServiceTitle})
            .then((data) => {
                setBookProductionServicesList(data.data.book_production_services);
                // dispatch(saveBPPId(data.data.book_publishing_project_id || 0))
                setBPPId(data.data.book_publishing_project_id || 0)
                setSelectedServicesCount(data.data?.selected_services_count || 0)
                setIsPageActive(true)
            })
            .catch(() => {
                const filteredBookProductionServices = SERVICES_LIST_MOCK.filter((book_production_service) =>
                    book_production_service.title.toLowerCase().startsWith(searchBookProductionServiceTitle.toLowerCase())
                );
                setBookProductionServicesList(filteredBookProductionServices);
                setBPPId(1)
                setSelectedServicesCount(PROJECT_MOCK.services_list.length)
                setIsPageActive(true)
            });
    };

    const handleSearchServiceTitleChange = (e: ChangeEvent) => {
        dispatch(saveBookProductionServiceTitle(e.target.value))
    };

    useEffect(handleSearchServiceClick, [])

    // useEffect(() => {
    //     if (bookProductionServicesList && bookProductionServicesList.length) {
    //     }
    // }, [bookProductionServicesList]);

    return {
        bookProductionServicesList,
        BPPId,
        searchBookProductionServiceTitle,
        selectedServicesCount,
        isPageActive,
        isManager,
        updateBPSListPageFunc: handleSearchServiceClick,
        handleSearchServiceClick,
        handleSearchServiceTitleChange,
    };
};