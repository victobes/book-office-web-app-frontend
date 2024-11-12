import { ChangeEvent, ClickEvent } from "../../App.typing";

export interface IBPPFiltersProps {
    selectedStatus?: string;
    selectedStartDate?: string;
    selectedEndDate?: string;
    handleStatusChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    handleStartDateChange: (e: ChangeEvent) => void;
    handleEndDateChange: (e: ChangeEvent) => void;
    handleFilterBPPClick: (e: ClickEvent) => void;
}