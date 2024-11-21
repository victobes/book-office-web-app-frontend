import "./ServiceManagerCard.css"
import {FC} from "react";
import {IServiceManagerCardProps} from "./typing.tsx";
import unknownImage from "/unknown.jpg"
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import {api} from "../../core/api";
import {store} from "../../core/store";
import {addNotification} from "../../core/store/slices/appSlice.ts";

export const ServiceManagerCard: FC<IServiceManagerCardProps> = (service: IServiceManagerCardProps) => {
    const handleClickDelete = () => {
        api.bookProductionService.bookProductionServiceDeleteDelete(service.id.toString())
            .then(() => {
                store.dispatch(
                    addNotification({
                        message: "Услуга удалена",
                        isError: false,
                    })
                );
                service.updateBPSListPageFunc()
            })
            .catch(() => {
                    store.dispatch(
                        addNotification({
                            message: "Ошибка удаления услуги",
                            isError: true,
                        })
                    );
                }
            )
    }
    return (
        <div className="card mb-3 service-card-container">
            <div className="row g-0">
                <div className="col-md-1 card-body">
                    <img
                        src={service.imageUrl ? (service.imageUrl) : (unknownImage)}
                        className="img-fluid rounded-start"
                        alt={service.title}
                        width="100px"
                    />
                </div>
                <div className="col-md-3 card-body">
                    <h5 className="card-title">
                        <Link
                            to={"/book_production_service/" + service.id}
                            id={service.title}
                            className="text-black h3"
                            state={{from: service.title}}
                        >
                           <strong>{service.title}</strong>
                        </Link>
                    </h5>
                </div>
                <div className="col-md-3 card-body">
                    <p className="card-text h4">{service.price}</p>
                </div>
                <div className="col-md-2 card-body">
                    <Link
                        to={"/edit_service/" + service.id}
                        className="btn black-btn"
                    >
                        <strong>Изменить</strong>
                    </Link>
                {/* </div>
                <div className="col-md-1 card-body"> */}
                    <Button
                        className="ms-3 outlined-btn"
                        onClick={handleClickDelete}
                    >
                        Удалить
                    </Button></div>
            </div>
        </div>
    );
};