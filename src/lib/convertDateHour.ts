export class ConvertDateHour {
    private readonly date: Date;
    private locale: string;

    constructor(value: string, locale: string = 'fr-FR') {
        this.date = new Date(value);
        this.locale = locale;
    }

    convertToDate() {
        return this.date.toLocaleDateString(this.locale, {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
    }

    convertToHour() {
        return this.date.toLocaleTimeString(this.locale, {
            hour: '2-digit',
            minute: '2-digit',
        });
    }
}