import Activity from "../pages/Activity"

export interface Activity {
    id: number;
    actName: string;
    actContent: string;
    actReserve: string;
}

export interface ActivityList {
    member: Activity[];
    totalItems: number;
}