export interface IBPPTableProps {
    rows: IBPPTableRow[];
}
export interface IBPPTableRow {
    number: number;
    status: string;
    creationDate: string;
    registrationDate: string;
    completionDate: string;
}