import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAppData {
    searchBookProductionServiceTitle: string;
    filterBPPStatus?: string;
    filterBPPStartDate?: string;
    filterBPPEndDate?: string;
}

const initialState: IAppData = {
    searchBookProductionServiceTitle: "",
    filterBPPStatus: undefined,
    filterBPPStartDate: undefined,
    filterBPPEndDate: undefined,
};

export const appSlice = createSlice({
    name: "appSlice",
    initialState,
    reducers: {
        refreshApp: (state) => {
            state.searchBookProductionServiceTitle = "";
            state.filterBPPStatus = undefined;
            state.filterBPPStartDate = undefined;
            state.filterBPPEndDate = undefined;
        },
        saveBookProductionServiceTitle: (state, action: PayloadAction<string>) => {
            state.searchBookProductionServiceTitle = action.payload;
        },
        saveFilterBPPStatus: (state, action: PayloadAction<string>) => {
            state.filterBPPStatus = action.payload;
        },
        saveFilterBPPStartDate: (state, action: PayloadAction<string>) => {
            state.filterBPPStartDate = action.payload;
        },
        saveFilterBPPEndDate: (state, action: PayloadAction<string>) => {
            state.filterBPPEndDate = action.payload;
        },
    },
});

export const {
    refreshApp,
    saveBookProductionServiceTitle,
    saveFilterBPPStatus,
    saveFilterBPPStartDate,
    saveFilterBPPEndDate,
} = appSlice.actions;