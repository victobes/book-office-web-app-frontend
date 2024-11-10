import { FC } from "react";
import { IBookProductionServiceListCardProps } from "./typing.tsx";
// import defaultImage from "/Users/victoria/book-office-app/src/images/unknown.jpg";
import defaultImage from "/unknown.jpg";
import { Link } from "react-router-dom";
import "/Users/victoria/book-office-app/src/components/BookProductionServiceListCard/BookProductionServiceListCard.css"

export const BookProductionServiceListCard: FC<IBookProductionServiceListCardProps> = (book_production_service: IBookProductionServiceListCardProps) => {
    return (
        <div className="card h-100 service-card-container">
            <div className="card-body d-flex flex-column">
                <img
                    src={book_production_service.imageUrl ? (book_production_service.imageUrl) : (defaultImage)}
                    className="card-img-top h-50 mb-3 service-card-img"
                    alt={book_production_service.title}
                />
                <h5 className="card-title text-black"><strong>{book_production_service.title}</strong></h5>
                <p className="card-text text-black">{book_production_service.price}</p>
                <Link
                    to={"/book_production_service/" + book_production_service.id}
                    id={book_production_service.title}
                    className="btn w-100 mt-auto p-2 text-white bg-black status-btn"
                    state={{ from: book_production_service.title }}>
                    <strong>Читать подробнее</strong>
                </Link>
                <button className="btn mt-2 btn-outline-dark text-black border-black status-btn">
                    <strong>Выбрать услугу</strong>
                </button>
            </div>
        </div>
    );
};