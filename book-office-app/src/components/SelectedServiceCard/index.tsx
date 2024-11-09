import { FC } from "react";
// import degaultImage from "/Users/victoria/book-office-app/src/images/unknown.jpg"
import { Link } from "react-router-dom"
import { ISelectedServiceCardProps } from "./typing";
import defaultImage from "/unknown.jpg";

export const SelectedServiceCard: FC<ISelectedServiceCardProps> = (service :
    ISelectedServiceCardProps) => {
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
                                state={{from: service.title}}
                            >
                                <strong>{service.title}</strong>
                            </Link>
                        </h2>
                        <p className="card-text h3">{service.price}</p>
                        {/* <p className="card-text">Тариф: <strong>{service.rate}</strong></p> */}
                        <select className="rate-select" name="rate_info">
                                    <option value="BASE" selected>Тариф "Базовый"</option>
                                    <option value="PROFESSIONAL">Тариф "Профессиональный"</option>
                                    <option value="PREMIUM">Тариф "Премиальный"</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        );
    };
