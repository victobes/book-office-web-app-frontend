import { FC, useEffect, useState } from "react";
// import degaultImage from "/Users/victoria/book-office-app/src/images/unknown.jpg"
import { Link } from "react-router-dom"
import { ISelectedServiceCardProps } from "./typing";
import defaultImage from "/unknown.jpg";
import { ChangeEventSelect } from "../../App.typing.tsx";
import { api } from "../../core/api";
import { store } from "../../core/store";
import { addNotification } from "../../core/store/slices/appSlice.ts";

export const SelectedServiceCard: FC<ISelectedServiceCardProps> = (service:
    ISelectedServiceCardProps) => {
    const [rate, setRate] = useState<string>("BASE");

    const handleChangeRate = (event: ChangeEventSelect) => {
        setRate(event.target.value)
        service.handleUpdateRate(service.id || 0, event.target.value)
    };
    
    useEffect(() => {
        setRate(service.rate)
    }, [])
    
    const handleDeleteClick = () => {
        api.selectedServices.selectedServicesDeleteDelete(service.bppID, service.id?.toString() || "")
            .then(() => {
                store.dispatch(
                    addNotification({
                        message: "Услуга удалена из проекта",
                        isError: false,
                    })
                );
                service.handleClickDelete(service?.id || 0)
            }
            )
            .catch(() => {
                store.dispatch(
                    addNotification({
                        message: "Ошибка удаления услуги из проекта",
                        isError: true,
                    })
                );
            }
            )
    };

    return (
        <div className="card mb-3 service-card-container">
            <div className="row g-0">
                <div className="col-md-3">
                    <div className="card-body">
                        <img
                            src={service.imageUrl ? (service.imageUrl) : (defaultImage)}
                            className="img-fluid rounded-start"
                            alt={service.title}
                            width="auto"
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card-body col g-2">
                        <h2 className="card-title">
                            <Link
                                to={"/book_production_service/" + service.id}
                                id={service.title}
                                className="text-black text-decoration-none"
                                state={{ from: service.title }}
                            >
                                <strong>{service.title}</strong>
                            </Link>
                        </h2>
                        <p className="card-text h3">{service.price}</p>
                        {/* <p className="card-text">Тариф: <strong>{service.rate}</strong></p> */}
                        {
                            service.isEditable ?
                                <select className="rate-select" name="rate_info" value={rate} onChange={handleChangeRate}>
                                    <option value="BASE" selected>Тариф "Базовый"</option>
                                    <option value="PROFESSIONAL">Тариф "Профессиональный"</option>
                                    <option value="PREMIUM">Тариф "Премиальный"</option>
                                </select>
                            :
                                <select className="rate-select" name="rate_info" value={rate} onChange={handleChangeRate} aria-readonly>
                                    <option value="BASE">Тариф "Базовый"</option>
                                    <option value="PROFESSIONAL">Тариф "Профессиональный"</option>
                                    <option value="PREMIUM">Тариф "Премиальный"</option>
                                </select>
                        }
                        {
                        service.isEditable ?
                            <button
                                type="button"
                                className="btn-close mt-1"
                                aria-label="Close"
                                onClick={handleDeleteClick}
                            ></button>
                            :
                            <></>
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};
