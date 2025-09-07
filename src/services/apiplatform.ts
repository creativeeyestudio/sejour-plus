export default class Api {
    
    constructor() {}

    // ------------------------------------
    // Hotel Data
    // ------------------------------------
    async getHotelData() {
        try {
            const url = `${import.meta.env.VITE_API_URL}/api/hotels/1`;
            const res = await fetch(url);
            console.log(res);
            if (!res.ok) console.error(`Erreur lors de la récupération API`);
            const result = await res.json();
            return result;
        } catch (error) {
            console.error(error)
        }
    }
}