/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface BookProductionService {
  /** ID */
  pk?: number;
  /**
   * Title
   * @minLength 1
   * @maxLength 130
   */
  title: string;
  /**
   * Description
   * @minLength 1
   */
  description: string;
  /** Is active */
  is_active?: boolean;
  /**
   * Image url
   * @maxLength 255
   */
  image_url?: string | null;
  /**
   * Price
   * @minLength 1
   * @maxLength 50
   */
  price: string;
}

export interface GetBookProductionService {
  book_production_services: BookProductionService[];
  /** Book publishing project id */
  book_publishing_project_id?: number | null;
  /** Selected services count */
  selected_services_count: number;
}

export interface BookPublishingProject {
  /** ID */
  pk?: number;
  /** Status */
  status?: "DRAFT" | "DELETED" | "FORMED" | "COMPLETED" | "REJECTED";
  /**
   * Creation datetime
   * @format date-time
   */
  creation_datetime?: string;
  /**
   * Formation datetime
   * @format date-time
   */
  formation_datetime?: string | null;
  /**
   * Completion datetime
   * @format date-time
   */
  completion_datetime?: string | null;
  /** Format */
  format?: "A4" | "A5" | "A6" | "SQUARE" | "B5";
  /**
   * Circulation
   * @min -2147483648
   * @max 2147483647
   */
  circulation?: number | null;
  /** Manager */
  manager?: string;
  /**
   * Personal discount
   * @min -2147483648
   * @max 2147483647
   */
  personal_discount?: number | null;
  /** Customer */
  customer?: string;
}

export interface ServiceForProject {
  /** ID */
  pk?: number;
  /**
   * Title
   * @minLength 1
   * @maxLength 130
   */
  title: string;
  /**
   * Price
   * @minLength 1
   * @maxLength 50
   */
  price: string;
  /**
   * Image url
   * @maxLength 255
   */
  image_url?: string | null;
}

export interface Related {
  service: ServiceForProject;
  /** Rate */
  rate?: "BASE" | "PREMIUM" | "PROFESSIONAL";
}

export interface FullBookPublishingProject {
  /** ID */
  pk?: number;
  /** Status */
  status?: "DRAFT" | "DELETED" | "FORMED" | "COMPLETED" | "REJECTED";
  /**
   * Creation datetime
   * @format date-time
   */
  creation_datetime?: string;
  /**
   * Formation datetime
   * @format date-time
   */
  formation_datetime?: string | null;
  /**
   * Completion datetime
   * @format date-time
   */
  completion_datetime?: string | null;
  /** Format */
  format?: "A4" | "A5" | "A6" | "SQUARE" | "B5";
  /**
   * Circulation
   * @min -2147483648
   * @max 2147483647
   */
  circulation?: number | null;
  /** Customer */
  customer: number;
  /** Manager */
  manager?: number | null;
  /**
   * Personal discount
   * @min -2147483648
   * @max 2147483647
   */
  personal_discount?: number | null;
  services_list: Related[];
}

export interface PutBookPublishingProject {
  /** ID */
  pk?: number;
  /** Status */
  status?: "DRAFT" | "DELETED" | "FORMED" | "COMPLETED" | "REJECTED";
  /**
   * Creation datetime
   * @format date-time
   */
  creation_datetime?: string;
  /**
   * Formation datetime
   * @format date-time
   */
  formation_datetime?: string | null;
  /**
   * Completion datetime
   * @format date-time
   */
  completion_datetime?: string | null;
  /** Format */
  format?: "A4" | "A5" | "A6" | "SQUARE" | "B5";
  /**
   * Circulation
   * @min -2147483648
   * @max 2147483647
   */
  circulation?: number | null;
  /** Customer */
  customer?: number;
  /** Manager */
  manager?: number | null;
  /** Personal discount */
  personal_discount?: number | null;
}

export interface ResolveBookPublishingProject {
  /** ID */
  pk?: number;
  /** Status */
  status?: "DRAFT" | "DELETED" | "FORMED" | "COMPLETED" | "REJECTED";
  /**
   * Creation datetime
   * @format date-time
   */
  creation_datetime?: string;
  /**
   * Formation datetime
   * @format date-time
   */
  formation_datetime?: string | null;
  /**
   * Completion datetime
   * @format date-time
   */
  completion_datetime?: string | null;
  /** Format */
  format?: "A4" | "A5" | "A6" | "SQUARE" | "B5";
  /** Circulation */
  circulation?: number | null;
  /** Customer */
  customer?: number;
  /** Manager */
  manager?: number | null;
  /** Personal discount */
  personal_discount?: number | null;
}

export interface UpdateSelectedService {
  /** Rate */
  rate?: "BASE" | "PREMIUM" | "PROFESSIONAL";
}

export interface SelectedServices {
  /** Project */
  project: number;
  /** Service */
  service: number;
  /** Rate */
  rate?: "BASE" | "PREMIUM" | "PROFESSIONAL";
}

export interface UserLogin {
  /**
   * Staff status
   * Designates whether the user can log into this admin site.
   */
  is_staff?: boolean;
}

export interface User {
  /** ID */
  id?: number;
  /**
   * Username
   * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
   * @minLength 1
   * @maxLength 150
   * @pattern ^[\w.@+-]+$
   */
  username: string;
  /**
   * Email address
   * @format email
   * @maxLength 254
   */
  email?: string;
  /**
   * Password
   * @minLength 1
   * @maxLength 128
   */
  password: string;
}

export interface UserUpdate {
  /**
   * Email
   * @format email
   */
  email?: string;
  /** Password */
  password?: string;
}

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "http://localhost:8000" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Book publishing office API
 * @version v1
 * @license MIT License
 * @baseUrl http://localhost:8000
 * @contact <victobes@mail.ru>
 *
 * API for book publishing office
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  bookProductionService = {
    /**
     * @description Получение списка услуг книжного издательства
     *
     * @tags book_production_service
     * @name BookProductionServiceList
     * @request GET:/book_production_service
     * @secure
     */
    bookProductionServiceList: (
      query?: {
        /** book_production_service_name */
        book_production_service_name?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetBookProductionService, void>({
        path: `/book_production_service`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Добавление услуги книжного издательства
     *
     * @tags book_production_service
     * @name BookProductionServicePostCreate
     * @request POST:/book_production_service/post
     * @secure
     */
    bookProductionServicePostCreate: (data: BookProductionService, params: RequestParams = {}) =>
      this.request<BookProductionService, void>({
        path: `/book_production_service/post`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Получение услуги книжного издательства
     *
     * @tags book_production_service
     * @name BookProductionServiceRead
     * @request GET:/book_production_service/{id}
     * @secure
     */
    bookProductionServiceRead: (id: string, params: RequestParams = {}) =>
      this.request<BookProductionService, void>({
        path: `/book_production_service/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Добавление услуги книжного издательства в проект
     *
     * @tags book_production_service
     * @name BookProductionServiceAddCreate
     * @request POST:/book_production_service/{id}/add
     * @secure
     */
    bookProductionServiceAddCreate: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/book_production_service/${id}/add`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description Загрузка изображения услуги книжного издательства в Minio
     *
     * @tags book_production_service
     * @name BookProductionServiceAddImageCreate
     * @request POST:/book_production_service/{id}/add_image
     * @secure
     */
    bookProductionServiceAddImageCreate: (
      id: string,
      data: {
        /**
         * Изображение для загрузки
         * @format binary
         */
        image: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/book_production_service/${id}/add_image`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description Удаление услуги книжного издательства
     *
     * @tags book_production_service
     * @name BookProductionServiceDeleteDelete
     * @request DELETE:/book_production_service/{id}/delete
     * @secure
     */
    bookProductionServiceDeleteDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/book_production_service/${id}/delete`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Изменение услуги книжного издательства
     *
     * @tags book_production_service
     * @name BookProductionServicePutUpdate
     * @request PUT:/book_production_service/{id}/put
     * @secure
     */
    bookProductionServicePutUpdate: (id: string, data: BookProductionService, params: RequestParams = {}) =>
      this.request<BookProductionService, void>({
        path: `/book_production_service/${id}/put`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  bookPublishingProject = {
    /**
     * @description Получение списка издательских проектов
     *
     * @tags book_publishing_project
     * @name BookPublishingProjectList
     * @request GET:/book_publishing_project
     * @secure
     */
    bookPublishingProjectList: (
      query?: {
        /** status */
        status?: string;
        /**
         * status
         * @format date-time
         */
        formation_start?: string;
        /**
         * status
         * @format date-time
         */
        formation_end?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BookPublishingProject[], void>({
        path: `/book_publishing_project`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Получение издательского проекта
     *
     * @tags book_publishing_project
     * @name BookPublishingProjectRead
     * @request GET:/book_publishing_project/{id}
     * @secure
     */
    bookPublishingProjectRead: (id: string, params: RequestParams = {}) =>
      this.request<FullBookPublishingProject, void>({
        path: `/book_publishing_project/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Удаление издательского проекта
     *
     * @tags book_publishing_project
     * @name BookPublishingProjectDeleteDelete
     * @request DELETE:/book_publishing_project/{id}/delete
     * @secure
     */
    bookPublishingProjectDeleteDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/book_publishing_project/${id}/delete`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Формирование издательского проекта
     *
     * @tags book_publishing_project
     * @name BookPublishingProjectFormUpdate
     * @request PUT:/book_publishing_project/{id}/form
     * @secure
     */
    bookPublishingProjectFormUpdate: (id: string, params: RequestParams = {}) =>
      this.request<BookPublishingProject, void>({
        path: `/book_publishing_project/${id}/form`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Изменение издательского проекта
     *
     * @tags book_publishing_project
     * @name BookPublishingProjectPutUpdate
     * @request PUT:/book_publishing_project/{id}/put
     * @secure
     */
    bookPublishingProjectPutUpdate: (id: string, data: PutBookPublishingProject, params: RequestParams = {}) =>
      this.request<PutBookPublishingProject, void>({
        path: `/book_publishing_project/${id}/put`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Закрытие издательского проекта модератором
     *
     * @tags book_publishing_project
     * @name BookPublishingProjectResolveUpdate
     * @request PUT:/book_publishing_project/{id}/resolve
     * @secure
     */
    bookPublishingProjectResolveUpdate: (id: string, data: ResolveBookPublishingProject, params: RequestParams = {}) =>
      this.request<ResolveBookPublishingProject, void>({
        path: `/book_publishing_project/${id}/resolve`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  selectedServices = {
    /**
     * @description Удаление выбранной услуги из проекта
     *
     * @tags selected_services
     * @name SelectedServicesDeleteDelete
     * @request DELETE:/selected_services/{project_pk}/{service_pk}/delete
     * @secure
     */
    selectedServicesDeleteDelete: (projectPk: string, servicePk: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/selected_services/${projectPk}/${servicePk}/delete`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Изменение данных о выбранной услуге в проекте
     *
     * @tags selected_services
     * @name SelectedServicesPutUpdate
     * @request PUT:/selected_services/{project_pk}/{service_pk}/put
     * @secure
     */
    selectedServicesPutUpdate: (
      projectPk: string,
      servicePk: string,
      data: UpdateSelectedService,
      params: RequestParams = {},
    ) =>
      this.request<SelectedServices, void>({
        path: `/selected_services/${projectPk}/${servicePk}/put`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  users = {
    /**
     * @description Вход
     *
     * @tags users
     * @name UsersLogInCreate
     * @request POST:/users/log_in
     * @secure
     */
    usersLogInCreate: (
      data: {
        /** username */
        username: string;
        /** password */
        password: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<UserLogin, void>({
        path: `/users/log_in`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        format: "json",
        ...params,
      }),

    /**
     * @description Выход
     *
     * @tags users
     * @name UsersLogOutCreate
     * @request POST:/users/log_out
     * @secure
     */
    usersLogOutCreate: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/users/log_out`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description Создание пользователя
     *
     * @tags users
     * @name UsersSignUpCreate
     * @request POST:/users/sign_up
     * @secure
     */
    usersSignUpCreate: (data: User, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/users/sign_up`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Обновление данных пользователя
     *
     * @tags users
     * @name UsersUpdateUpdate
     * @request PUT:/users/update
     * @secure
     */
    usersUpdateUpdate: (data: UserUpdate, params: RequestParams = {}) =>
      this.request<User, void>({
        path: `/users/update`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
