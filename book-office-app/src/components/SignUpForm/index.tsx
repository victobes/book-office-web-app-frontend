import { FC, useState } from "react";
import { ISignUpFormProps, IUserSignUpData } from "./typing.tsx";
import { ChangeEvent } from "../../App.typing.tsx";
import { api } from "../../core/api";
import { useNavigate } from "react-router-dom";
import {store} from "../../core/store";
import {addNotification} from "../../core/store/slices/appSlice.ts";

export const SignUpForm: FC<ISignUpFormProps> = () => {
    const navigate = useNavigate();

    const [loginFormData, setLoginFormData] = useState<IUserSignUpData>({
        username: "",
        // email: "",
        password: "",
    });

    const handleChange = (event: ChangeEvent) => {
        const { id, value } = event.target;
        setLoginFormData((prevState) => ({ ...prevState, [id]: value }));
    }

    const clickSignUp = () => {
        if (loginFormData.username && loginFormData.password) {
            api.users.usersSignUpCreate(loginFormData)
                .then((data) => {
                    console.log("success", data)
                    store.dispatch(
                        addNotification({
                            message: "Вы успешно зарегистрировались. Войдите",
                            isError: false,
                        })
                    );
                    navigate('/login');
                })
                .catch((data) => {
                    if (data.status == 400) {
                        store.dispatch(
                            addNotification({
                                message: "Пользователь с указанным логином уже существует",
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
                });
        }
    }

    return (
        <div className="card border-black" style={{ width: '100%', maxWidth: '350px' }}>
            <div className="card-body">
                <h5 className="card-title text-center mb-4"><strong>Регистрация</strong></h5>
                <form>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                            Логин
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="form-control"
                            placeholder="Введите логин"
                            value={loginFormData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {/* <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                            E-mail
                        </label>
                        <input
                            type="text"
                            id="email"
                            className="form-control"
                            placeholder="Введите e-mail"
                            value={loginFormData.email}
                            onChange={handleChange}
                            required
                        />
                    </div> */}
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Пароль
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            placeholder="Введите пароль"
                            value={loginFormData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="button" className="btn text-white bg-black status-btn w-100" onClick={clickSignUp}>
                        <strong>Зарегистрироваться</strong>
                    </button>
                </form>
            </div>
        </div>
    );
};