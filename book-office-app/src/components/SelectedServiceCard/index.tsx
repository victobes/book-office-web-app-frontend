import { FC } from "react";
import degaultImage from "/Users/victoria/book-office-app/src/images/unknown.jpg"
import { Link } from "react-router-dom"
import { ISelectedServiceCardProps } from "./typing";

export const SelectedServiceCard: FC<ISelectedServiceCardProps> = (service :
    ISelectedServiceCardProps) => {
        return (
            <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-2">
                    <div className="card-body">
                        <img
                            src={service.imageUrl ? (service.imageUrl) : (degaultImage)}
                            className="img-fluid rounded-start"
                            alt={service.title}
                            width="100px"
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h5 className="card-title">
                            <Link
                                to={"/software/" + service.id}
                                id={service.title}
                                className="text-black text-decoration-none"
                                state={{from: service.title}}
                            >
                                {service.title}
                            </Link>
                        </h5>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card-body">
                        <p className="card-text"><strong>{service.price}</strong></p>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card-body">
                        <p className="card-text">Тариф: <strong>{service.rate}</strong></p>
                    </div>
                </div>
            </div>
        </div>
        );
    };
