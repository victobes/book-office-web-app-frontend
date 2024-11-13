import {createSlice, PayloadAction} from "@reduxjs/toolkit";
interface IUser {
    username: string;
    isAuth: boolean;
    BPPId?: number;
}
const initialState: IUser = {
    isAuth: false,
    username: "",
};
export const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        refreshUser: (state) => {
            state.isAuth = false;
            state.username = "";
            state.BPPId = undefined;
        },
        saveUser: (state, action: PayloadAction<IUser>) => {
            state.username = action.payload.username;
            state.isAuth = action.payload.isAuth;
        },
        saveBPPId: (state, action: PayloadAction<number>) => {
            state.BPPId = action.payload;
        },
    },
});
export const {
    saveUser,
    refreshUser,
    saveBPPId
} = userSlice.actions;