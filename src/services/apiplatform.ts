import { Activity } from "../interfaces/activity";
import { CategoryList } from "../interfaces/category";
import { HotelData } from "../interfaces/HotelData";
import { ServiceList } from "../interfaces/service";
import { Tourism } from "../interfaces/tourism";

export default class Api {
    private baseUrl = import.meta.env.VITE_API_URL;

    // ------------------------------------
    // Call Function
    // ------------------------------------
    private async callApi<T>(slug: string): Promise<T> {
        const res = await fetch(`${this.baseUrl}${slug}`);
        if (!res.ok) throw new Error(`Erreur lors de la récupération API (${slug})`);
        return res.json();
    }

    // ------------------------------------
    // Hotel Data
    // ------------------------------------
    async getHotelData(): Promise<HotelData> {
        return this.callApi<HotelData>('/api/hotels/1');
    }

    // ------------------------------------
    // Categories
    // ------------------------------------
    async getCategories(internalHotel: '0' | '1'): Promise<CategoryList> {
        return this.callApi<CategoryList>(`/api/categories/hotel-internal/${internalHotel}`)
    }

    // ------------------------------------
    // Services
    // ------------------------------------
    async getServices(): Promise<ServiceList> {
        return this.callApi<ServiceList>(`/api/services`);
    }

    // ------------------------------------
    // Activités
    // ------------------------------------
    async getActivity(slug: string): Promise<Activity> {
        return this.callApi<Activity>(slug);
    }

    // ------------------------------------
    // Tourisme
    // ------------------------------------
    async getTourism(slug: string): Promise<Tourism> {
        return this.callApi<Tourism>(slug);
    }
}