import "./BookPublishingProjectPage.css";
import { Navbar } from "../../components/Navbar";
import { Container } from "react-bootstrap";
import { SelectedServiceCard } from "../../components/SelectedServiceCard/index.tsx";
import { ISelectedServiceCardProps } from "../../components/SelectedServiceCard/typing.tsx";
import { Breadcrumbs } from "../../components/Breadcrumbs/index.tsx";
import { useBookPublishingProjectPage } from "./useBookPublishingProjectPage.tsx";
import { Related } from "../../core/api/Api.ts";

export const BookPublishingProjectPage = () => {
    // const { id } = useParams();
    // const [bookPublishingProjectContentData, setBookPublishingProjectContentData] =
    //     useState<FullBookPublishingProject>();

    // useEffect(() => {
    //     if (id) {
    //         api.bookPublishingProject.bookPublishingProjectRead(id)
    //             .then((data) => {
    //                 setBookPublishingProjectContentData(data.data);
    //             })
    //             .catch(() => {
    //                 setBookPublishingProjectContentData(PROJECT_MOCK)
    //             });
    //     }
    // }, [id]);
    const {
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
    } = useBookPublishingProjectPage()

    return (
        <>
            <Navbar />
            <Container>
                {/* <div className="content-wrapper"> */}
                <div>
                    <Breadcrumbs
                        middleItems={[
                            {
                                name: "Услуги",
                                link: "/book_production_services_list"
                            }
                        ]}
                        endItem={"Проект №" + bookPublishingProjectContentData?.pk}
                    />
                    <div className="col">
                        <div className="row mb-3 title-container">
                            <p className="h1"><strong>Проект №{bookPublishingProjectContentData?.pk}</strong></p>
                        </div>
                        <div className="row mb-3">
                            <div className="col-3">
                                <p className="h3"><strong>Формат:</strong></p>
                            </div>
                            <div className="col-9">
                                {
                                    isEditable ?
                                        <select className="format-select select-style" name="format_info" onChange={handleChangeFormat}>
                                            <option value="A4" selected>A4</option>
                                            <option value="A5">A5</option>
                                            <option value="A6">A6</option>
                                            <option value="B5">B5</option>
                                            <option value="SQUARE">Квадрат</option>
                                        </select>
                                        :
                                        <input
                                            type="text"
                                            className="form-control circulation-input"
                                            aria-label="format"
                                            aria-describedby="inputGroup-sizing-default"
                                            value={format?.toString()} readOnly />
                                }
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-3">
                                <p className="h3"><strong>Тираж:</strong></p>
                            </div>
                            <div className="col-9">
                                {
                                    isEditable ?
                                        <input
                                            type="text"
                                            className="input form-control circulation-input"
                                            aria-label="circulation"
                                            value={circulation ? circulation.toString() : '0'}
                                            onChange={handleChangeCirculation}
                                        />
                                        :
                                        <input
                                            type="text"
                                            className="form-control circulation-input"
                                            aria-label="circulation"
                                            aria-describedby="inputGroup-sizing-default"
                                            value={circulation?.toString()} readOnly />
                                }
                            </div>
                        </div>
                        {bookPublishingProjectContentData?.personal_discount != null ?
                            (<div className="row mb-3">
                                <div className="col">
                                    <p className="h3"><strong>Персональная скидка: {bookPublishingProjectContentData?.personal_discount} %</strong></p>
                                </div>
                            </div>) : (
                                <>
                                </>
                            )
                        }
                    </div>

                    {bookPublishingProjectContentData?.services_list && !!bookPublishingProjectContentData.services_list.length ? (
                        <div className="col-md-2 w-100">
                            {bookPublishingProjectContentData.services_list.map((service: Related, index: number) => {
                                const props: ISelectedServiceCardProps = {
                                    id: service.service.pk,
                                    title: service.service.title,
                                    price: service.service.price,
                                    imageUrl: service.service.image_url || undefined, // TODO: Что-то тут не так
                                    rate: service.rate || "BASE",
                                    isEditable: isEditable,
                                    bppID: id || "",
                                    handleClickDelete: handleClickDelete,
                                    handleUpdateRate: updRate,
                                };
                                return (
                                    <div className="col">
                                        <SelectedServiceCard key={index} {...props} />
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <Container className="d-flex justify-content-center mt-4 mb-5">
                            <h2>Проект пуст</h2>
                        </Container>
                    )}
                    {
                        isEditable ?
                            <div className="d-flex justify-content-end">
                                <button
                                    type="button"
                                    className="btn p-2 del-btn me-2"
                                    onClick={handleClearClick}>
                                    Удалить проект
                                </button>
                                <button
                                    type="button"
                                    className="btn p-2 text-white bg-black add-btn"
                                    onClick={handleFormClick}
                                >
                                    <strong>Оформить проект</strong>
                                </button>
                            </div>
                            :
                            <></>
                    }
                </div>
            </Container>
        </>
    );
};