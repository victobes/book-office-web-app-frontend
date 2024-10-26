export interface IBookProductionService {
    pk: number;
    title: string;
    price: string;
    image_url: string;
    description: string;
    is_active: boolean;
}

export interface IGetBookProductionServicesListResponse{
    book_production_services: IBookProductionService[];
    book_publishing_project_id: number;
    selected_services_count: number,
}

export interface ISelectedServiceData {
    pk: number;
    title: string;
    price: string;
    image_url: string;
}
export interface ISelectedServiceItem {
    service: ISelectedServiceData;
    rate: string;
}
export interface IBookPublishingProjectByIdResponse {
    pk: number;
    status: string;
    creation_datetime: string;
    formation_datetime: string;
    completion_datetime: string;
    format: string;
    circulation: number;
    customer: number;
    manager: number;
    personal_discount: number;
    services_list: ISelectedServiceItem[];
}