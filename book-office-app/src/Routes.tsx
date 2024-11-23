import { RouteObject, useRoutes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { BookProductionServicesListPage } from "./pages/BookProductionServicesListPage";
import { BookProductionServicePage } from "./pages/BookProductionServicePage";
import { BookPublishingProjectPage } from "./pages/BookPublishingProjectPage";
import { SignUpPage } from "./pages/SignUpPage";
import { LogInPage } from "./pages/LogInPage";
import { UserAccountPage } from "./pages/UserAccountPage";
import { BookPublishingProjectsListPage } from "./pages/BookPublishingProjectsListPage";
import { MainLayout } from "./components/MainLayout";
import { PrivatePageFirewall } from "./components/PrivatePageFirewall";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ForbiddenPage } from "./pages/ForbiddenPage";
import { ServiceEditPage } from "./pages/ServiceEditPage";
import { ManagerPageFirewall } from "./components/ManagerPageFirewall";
import { BookProductionServicesEditableListPage } from "./pages/BookProductionServicesEditableListPage";

export const AppRoutes = () => {
    const routes: RouteObject[] = [
        {
            element: <MainLayout />,
            children: [
                {
                    element: <PrivatePageFirewall />,
                    children: [
                        {
                            path: "/book_publishing_project/:id",
                            element: <BookPublishingProjectPage />
                        },
                        {
                            path: "/book_publishing_projects_list",
                            element: <BookPublishingProjectsListPage />,
                        },
                        {
                            element: <ManagerPageFirewall/>,
                            children: [
                                {
                                    path: "/edit_service/:id",
                                    element: <ServiceEditPage/>,
                                },
                                {
                                    path: "/add_service",
                                    element: <ServiceEditPage/>,
                                },
                                {
                                    path: "/services_list",
                                    element: <BookProductionServicesEditableListPage/>,
                                },
                            ],
                        }
                    ],
                },
                {
                    path: "/",
                    element: <MainPage />,
                },
                {
                    path: "/book_production_services_list",
                    element: <BookProductionServicesListPage />
                },
                {
                    path: "/book_production_service/:id",
                    element: <BookProductionServicePage />
                },

                {
                    path: "/sign_up",
                    element: <SignUpPage />,
                },
                {
                    path: "/log_in",
                    element: <LogInPage />,
                },
                {
                    path: "/user_account",
                    element: <UserAccountPage />,
                },
                {
                    path: "/forbidden",
                    element: <ForbiddenPage />,
                },
                {
                    path: "*",
                    element: <NotFoundPage />,
                },
            ],
        },

    ];

    const routeResult = useRoutes(routes);

    return <>{routeResult}</>;
}   