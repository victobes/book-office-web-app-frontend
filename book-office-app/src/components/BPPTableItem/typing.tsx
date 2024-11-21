export interface BPPTableItemProps {
    pk: number;
    customer: string;
    status: string;
    creationDate: string;
    registrationDate: string;
    completionDate: string;
    updateListPageFunc: () => void;
}