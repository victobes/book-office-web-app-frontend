import "./BookPublishingProjectPage.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../core/api";
import { FullBookPublishingProject, Related } from "../../core/api/Api.ts";
import { bookPublishingProject as BOOK_PUBLISHING_PROJECT_MOCK } from "../../core/mock/bookPublishingProject.ts";
import { ChangeEvent, ChangeEventSelect } from "../../App.typing.tsx";
import { store } from "../../core/store";
import { addNotification } from "../../core/store/slices/appSlice.ts";
import axios from "axios";

export const useBookPublishingProjectPage = () => {
    const [bookPublishingProjectContentData, setBookPublishingProjectContentData] = useState<FullBookPublishingProject>();
    const [isEditable, setIsEditable] = useState<boolean>(true);
    const [format, setFormat] = useState<string>("A4");
    const [circulation, setCirculation] = useState<number>();
    const [rates, setRates] = useState<{ [key: number]: string }>({});

    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const handleClickDelete = (key: number) => {
        setRates(prevRates => {
            const newRates = { ...prevRates };
            delete newRates[key];
            return newRates;
        });
        updPage()
    }

    const updRate = (key: number, rate: string) => {
        setRates(prevRates => ({
            ...prevRates,
            [key]: rate,
        }));
    };

    const updPage = () => {
        if (id) {
            api.bookPublishingProject.bookPublishingProjectRead(id)
                .then((data) => {
                    setBookPublishingProjectContentData(data.data);
                    if (data.data?.status != "DRAFT") {
                        setIsEditable(false);
                    }
                    setFormat(data.data.format || "A4")
                    setCirculation(data.data.circulation || 100)
                    data.data.services_list.forEach((service: Related) => {
                        updRate(service.service.pk || 0, service.rate || "BASE")
                    })
                })
                .catch(() => {
                    setBookPublishingProjectContentData(BOOK_PUBLISHING_PROJECT_MOCK)
                });
        }
    }

    useEffect(updPage, []);

    const handleChangeCirculation = (e: ChangeEvent) => {
        setCirculation(parseInt(e.target.value))
    };

    const handleChangeFormat = (event: ChangeEventSelect) => {
        setFormat(event.target.value)
    }

    const handleClearClick = () => {
        api.bookPublishingProject.bookPublishingProjectDeleteDelete(id || "")
            .then(() => {
                store.dispatch(
                    addNotification({
                        message: "Проект очищен",
                        isError: false,
                    })
                );
                navigate('/book_production_services_list');
            })
            .catch((_) => {
                store.dispatch(
                    addNotification({
                        message: "Ошибка удаления проекта",
                        isError: true,
                    })
                );
            }
            )
    }

    const formBPP = async () => {
        let failedRate = false
        for (const [key, value] of Object.entries(rates)) {
            try {
                const putRateRespData = await api.selectedServices.selectedServicesPutUpdate(id || "", key.toString(), { rate: value as "BASE" | "PREMIUM" | "PROFESSIONAL" })
                console.log(putRateRespData)
                console.log(value)
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    if (error.response?.status == 400) {
                        failedRate = true
                    }
                } else {
                    store.dispatch(
                        addNotification({
                            message: "Ошибка оформления проекта",
                            isError: true,
                        })
                    );
                    return
                }
            }
        }
        if (failedRate) {
            store.dispatch(
                addNotification({
                    message: "Ошибка указания тарифов",
                    isError: true,
                })
            );
            return
        }
        try {
            const putRespData = await api.bookPublishingProject.bookPublishingProjectPutUpdate(id || "", {
                circulation: circulation,
                format: format as "A4" | "A5" | "A6" | "SQUARE" | "B5"
            }) 
            console.log(putRespData)
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response?.status == 400) {
                    store.dispatch(
                        addNotification({
                            message: "Тираж не заполнен или меньше 100",
                            isError: true,
                        })
                    );
                    return
                }
            } else {
                store.dispatch(
                    addNotification({
                        message: "Ошибка оформления проекта",
                        isError: true,
                    })
                );
                return
            }
        }
        try {
            await api.bookPublishingProject.bookPublishingProjectFormUpdate(id || "")
            store.dispatch(
                addNotification({
                    message: "Проект успешно оформлен",
                    isError: false,
                })
            );
            navigate('/book_publishing_projects_list');
            return
        } catch (error) {
            store.dispatch(
                addNotification({
                    message: "Ошибка оформления проекта",
                    isError: true,
                })
            );
            return
        }
    }

    const handleFormClick = () => {
        formBPP()
            .then(() => {
            })
            .catch(() => {
            })
    }
    return {
        bookPublishingProjectContentData,
        isEditable,
        circulation,
        format,
        id,
        updRate: updRate,
        handleClickDelete,
        handleChangeCirculation: handleChangeCirculation,
        handleChangeFormat: handleChangeFormat,
        handleClearClick,
        handleFormClick,
    };
}