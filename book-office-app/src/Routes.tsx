import { RouteObject, useRoutes } from "react-router-dom";
import { IGlobalProps } from "./App.typing";
import { MainPage } from "./pages/MainPage";
import { BookProductionServicesListPage } from "./pages/BookProductionServicesListPage";
import { BookProductionServicePage } from "./pages/BookProductionServicePage";
import { BookPublishingProjectPage } from "./pages/BookPublishingProjectPage";
import { SignUpPage } from "./pages/SignUpPage";
import { LogInPage } from "./pages/LogInPage";
import { UserAccountPage } from "./pages/UserAccountPage";

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
        {
            path: "/book_publishing_project/:id",
            element: <BookPublishingProjectPage {...props} />
        },
        {
            path: "/sign_up",
            element: <SignUpPage {...props}/>,
        },
        {
            path: "/log_in",
            element: <LogInPage {...props}/>,
        },
        {
            path: "/user_account",
            element: <UserAccountPage {...props}/>,
        },
    ];
    const routeResult = useRoutes(routes);
    return <>{routeResult}</>;
};