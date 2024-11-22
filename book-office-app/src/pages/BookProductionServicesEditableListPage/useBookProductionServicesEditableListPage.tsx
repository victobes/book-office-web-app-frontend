import { useEffect, useState } from "react";
import { selectApp} from "../../core/store/slices/selectors.ts";
import { useSelector, useDispatch } from "../../core/store/index.ts";

import { bookProductionServicesList as SERVICES_LIST_MOCK } from "../../core/mock/bookProductionServicesList.ts";

import { ChangeEvent } from "../../App.typing";
import { saveSearchInListBookProductionServiceTitle } from "../../core/store/slices/appSlice.ts";
import { api } from "../../core/api";
import { BookProductionService } from "../../core/api/Api.ts";

export const useBookProductionServicesEditableListPage = () => {
    const [bookProductionServicesList, setBookProductionServicesList] = useState<BookProductionService[]>([]);
    const [isPageActive, setIsPageActive] = useState(false);
    const { searchInListBookProductionServiceTitle } = useSelector(selectApp);
    const dispatch = useDispatch();

    const handleSearchServiceClick = () => {
         setIsPageActive(false)
        api.bookProductionService.bookProductionServiceList({book_production_service_name: searchInListBookProductionServiceTitle})
            .then((data) => {
                setBookProductionServicesList(data.data.book_production_services);
                setIsPageActive(true)
            })
            .catch(() => {
                const filteredBookProductionServices = SERVICES_LIST_MOCK.filter((book_production_service) =>
                    book_production_service.title.toLowerCase().startsWith(searchInListBookProductionServiceTitle.toLowerCase())
                );
                setBookProductionServicesList(filteredBookProductionServices);
                setIsPageActive(true)
            });
    };

    const handleSearchServiceTitleChange = (e: ChangeEvent) => {
        dispatch(saveSearchInListBookProductionServiceTitle(e.target.value))
    };

    useEffect(handleSearchServiceClick, [])

    return {
        bookProductionServicesList,
        searchInListBookProductionServiceTitle,
        isPageActive,
        updateBPSListPageFunc: handleSearchServiceClick,
        handleSearchServiceClick,
        handleSearchServiceTitleChange,
    };
};