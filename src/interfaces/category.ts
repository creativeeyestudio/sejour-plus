export interface Category {
    id: number;
    catName: string;
    activities: string[];
    tourisms: string[];
}

export interface CategoryList {
    member: Category[];
    totalItems: number;
}