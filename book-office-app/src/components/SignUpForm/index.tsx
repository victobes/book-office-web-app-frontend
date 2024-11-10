import { FC } from "react";
import { ISignUpFormProps } from "./typing.tsx";
export const SignUpForm: FC<ISignUpFormProps> = () => {
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
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                            E-mail
                        </label>
                        <input
                            type="text"
                            id="email"
                            className="form-control"
                            placeholder="Введите e-mail"
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
                            required
                        />
                    </div>
                    <button type="submit" className="btn text-white bg-black status-btn w-100">
                       <strong>Зарегистрироваться</strong>
                    </button>
                </form>
            </div>
        </div>
    );
};