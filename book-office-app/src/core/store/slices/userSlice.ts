import {createSlice, PayloadAction} from "@reduxjs/toolkit";
interface IUser {
    username: string;
    isAuth: boolean;
    isManager: boolean;
}
const initialState: IUser = {
    isAuth: false,
    isManager: false,
    username: "",
};
export const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        refreshUser: (state) => {
            state.isAuth = false;
            state.isManager = false;
            state.username = "";
        },
        saveUser: (state, action: PayloadAction<IUser>) => {
            state.username = action.payload.username;
            state.isAuth = action.payload.isAuth;
            state.isManager = action.payload.isManager;
        },
    },
});
export const {
    saveUser,
    refreshUser,
} = userSlice.actions;