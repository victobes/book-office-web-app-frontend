import { sendRequest } from "../index.ts";
import { IGetBookProductionServicesListResponse, IBookProductionService, IBookPublishingProjectByIdResponse } from "./typing.ts";
export const getBookProductionServicesList = async (searchTitle?: string) => {
    try {
        const response: IGetBookProductionServicesListResponse = await sendRequest({
            method: "GET",
            path: "/book_production_service",
            params: searchTitle ? { book_production_service_name: searchTitle } : undefined,
        });
        return response;
    } catch (error) {
        console.error("Error fetching book production services list:", error);
        throw error;
    }
};

export const getBookProductionServiceById = async (id: string) => {
    try {
        const response: IBookProductionService = await sendRequest({
            method: "GET",
            path: `/book_production_service/${id}`,
        });
        return response;
    } catch (error) {
        console.error("Error fetching book production service by id:", error);
        throw error;
    }
};

export const getBookPublishingProjectById = async (id: string) => {
    try {
        const response: IBookPublishingProjectByIdResponse = await sendRequest({
            method: "GET",
            path: `/book_publishing_projects/${id}`,
        });
        return response;
    } catch (error) {
        console.error("Error fetching book publshing project by id:", error);
        throw error;
    }
};