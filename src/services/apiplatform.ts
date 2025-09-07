import { HotelData } from "../interfaces/HotelData";
import { ServiceList } from "../interfaces/service";

export default class Api {
    
    constructor() {}

    // ------------------------------------
    // Call Function
    // ------------------------------------
    async callApi(slug: string) {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/${slug}`);
        if (!res.ok) console.error(`Erreur lors de la récupération API (${slug})`);
        return res.json();
    }

    // ------------------------------------
    // Hotel Data
    // ------------------------------------
    async getHotelData(): Promise<HotelData> {
        return this.callApi('hotels/1');
    }

    // ------------------------------------
    // Categories
    // ------------------------------------
    async getCategories(internalHotel: string) {
        return this.callApi(`categories/hotel-internal/${internalHotel}`)
    }

    // ------------------------------------
    // Services
    // ------------------------------------
    async getServices(): Promise<ServiceList> {
        return this.callApi(`services`);
    }
}