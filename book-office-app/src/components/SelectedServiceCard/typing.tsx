export interface ISelectedServiceCardProps {
    id?: number;
    title: string;
    price: string;
    imageUrl?: string;
    rate: string;
    isEditable: boolean;
    bppID: string;
    handleClickDelete: (key: number) => void;
    handleUpdateRate: (key: number, value: string) => void;
}