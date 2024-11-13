import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface INotification {
    id: string;
    message: string;
    isError: boolean;
}

export interface IAppData {
    searchBookProductionServiceTitle: string;
    filterBPPStatus?: string;
    filterBPPStartDate?: string;
    filterBPPEndDate?: string;

    notifications: INotification[];
}

const initialState: IAppData = {
    searchBookProductionServiceTitle: "",
    filterBPPStatus: undefined,
    filterBPPStartDate: undefined,
    filterBPPEndDate: undefined,
    notifications: [],
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
        addNotification: (
            state,
            action: PayloadAction<{ message: string; isError?: boolean }>
        ) => {
            state.notifications.push({
                message: action.payload.message,
                id: uuidv4(),
                isError: action.payload.isError || false,
            });
        },
        deleteNotification: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            const queue = state.notifications;
            state.notifications = queue.filter((item) => item.id !== id);
        },
    },
});

export const {
    refreshApp,
    saveBookProductionServiceTitle,
    saveFilterBPPStatus,
    saveFilterBPPStartDate,
    saveFilterBPPEndDate,
    addNotification,
    deleteNotification,
} = appSlice.actions;