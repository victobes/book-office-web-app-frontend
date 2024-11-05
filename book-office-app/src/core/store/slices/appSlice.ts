import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAppData {
    searchBookProductionServiceTitle: string;
}

const initialState: IAppData = {
    searchBookProductionServiceTitle: "",
};

export const appSlice = createSlice({
    name: "appSlice",
    initialState,
    reducers: {
        refreshApp: (state) => {
            state.searchBookProductionServiceTitle = "";
        },
        saveBookProductionServiceTitle: (state, action: PayloadAction<string>) => {
            state.searchBookProductionServiceTitle = action.payload;
        },
    },
});

export const {
    refreshApp,
    saveBookProductionServiceTitle
} = appSlice.actions;