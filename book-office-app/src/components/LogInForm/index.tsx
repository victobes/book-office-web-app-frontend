import {FC, useState} from "react";
import {ILoginFormProps, IUserLoginData} from "./typing.tsx";
import {ChangeEvent} from "../../App.typing.tsx";
import {api} from "../../core/api";
import {useDispatch} from "../../core/store";
import { saveUser } from "../../core/store/slices/userSlice.ts";
import {useNavigate} from 'react-router-dom';

export const LogInForm: FC<ILoginFormProps> = () => {
    const navigate = useNavigate();
    const [loginFormData, setLoginFormData] = useState<IUserLoginData>({
        username: "",
        password: "",
    });
    const handleChange = (event: ChangeEvent) => {
        const {id, value} = event.target;
        setLoginFormData((prevState) => ({...prevState, [id]: value}));
    }
    const dispatch = useDispatch();
    const clickLogIn = () => {
        if (loginFormData.username && loginFormData.password) {
            api.users.usersLogInCreate(loginFormData)
                .then(() => {
                    dispatch(saveUser({username: loginFormData.username, isAuth: true}))
                    navigate('/'); // TODO: алерт успеха
                })
                .catch((data) => {
                    console.log("fail", data) // TODO: алерт
                });
        }
    }

    return (
        <div className="card border-black" style={{maxWidth: '350px'}}>
            <div className="card-body">
                <h5 className="card-title text-center mb-4"><strong>Вход</strong></h5>
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
                    <button type="submit" className="btn text-white bg-black status-btn w-100" onClick={clickLogIn}>
                        <strong>Войти</strong>
                    </button>
                </form>
            </div>
        </div>
    );
};