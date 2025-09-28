export interface Service {
    id: number;
    serviceName: string;
    serviceDesc: string;
    servicePos: number;
}

export interface ServiceList {
    member: Service[];
    totalItems: number;
}