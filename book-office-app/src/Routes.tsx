import { RouteObject, useRoutes } from "react-router-dom";
import { IGlobalProps } from "./App.typing";
import { MainPage } from "./pages/MainPage";
import { BookProductionServicesListPage } from "./pages/BookProductionServicesListPage";
import { BookProductionServicePage } from "./pages/BookProductionServicePage";
// import { BookPublishingProjectPage } from "./pages/BookPublishingProjectPage";

export const AppRoutes = (props: IGlobalProps) => {
    const routes: RouteObject[] = [
        {
            path: "/",
            element: <MainPage {...props} />,
        },
        {
            path: "/book_production_services_list",
            element: <BookProductionServicesListPage {...props} />
        },
        {
            path: "/book_production_service/:id",
            element: <BookProductionServicePage>,</BookProductionServicePage>
        },
    ];
    const routeResult = useRoutes(routes);
    return <>{routeResult}</>;
};