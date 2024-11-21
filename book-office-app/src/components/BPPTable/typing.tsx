export interface IBPPTableProps {
    rows: IBPPTableRow[];
    updateListPageFunc: () => void;
}

export interface IBPPTableRow {
    number: number;
    status: string;
    creationDate: string;
    registrationDate: string;
    completionDate: string;
    customer: string;
}