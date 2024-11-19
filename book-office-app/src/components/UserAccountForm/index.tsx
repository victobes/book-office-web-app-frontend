import {FC, useState} from "react";
import {IUserAccountData, IUserAccountFormProps} from "./typing.tsx";
import { ChangeEvent } from "../../App.typing.tsx";
import { store } from "../../core/store/index.ts";
import { api } from "../../core/api/index.ts";
import { addNotification } from "../../core/store/slices/appSlice.ts";

export const UserAccountForm: FC<IUserAccountFormProps> = () => {
    const [userAccountFormData, setUserAccountFormData] = useState<IUserAccountData>({
        email: undefined,
        password: undefined,
    });

    const handleChange = (event: ChangeEvent) => {
        const {id, value} = event.target;
        setUserAccountFormData((prevState) => ({...prevState, [id]: value}));
    }

    const handleUpdateClick = () => {
        if (!(userAccountFormData.email || userAccountFormData.password)) {
            return
        }
        api.users.usersUpdateUpdate(userAccountFormData)
            .then(() => {
                store.dispatch(
                    addNotification({
                        message: "Данные аккаунта успешно обновлены",
                        isError: false,
                    })
                );
                setUserAccountFormData({email: undefined, password: undefined})
            })
            .catch((data) => {
                if (data.status == 400) {
                    store.dispatch(
                        addNotification({
                            message: "Введены некорректные данные!",
                            isError: true,
                        })
                    );
                } else {
                    store.dispatch(
                        addNotification({
                            message: "Ошибка сервера",
                            isError: true,
                        })
                    );
                }
            })
    }

    return (
        <div className="card border-black" style={{width: '100%', maxWidth: '350px'}}>
            <div className="card-body">
                <h5 className="card-title text-center mb-4"><strong>Редактирование аккаунта</strong></h5>
                <form>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                            E-mail
                        </label>
                        <input
                            type="text"
                            id="email"
                            className="form-control"
                            placeholder="Новый e-mail"
                            value={userAccountFormData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Пароль
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            placeholder="Новый пароль"
                            value={userAccountFormData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="button" className="btn text-white bg-black status-btn w-100" onClick={handleUpdateClick}>
                        <strong>Сохранить изменения</strong>
                    </button>
                </form>
            </div>
        </div>
    );
};