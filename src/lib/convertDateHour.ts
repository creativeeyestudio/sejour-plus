export class ConvertDateHour {
    private readonly dateValue: Date;
    private readonly locale: string;

    constructor(dateValue: string, locale: string = 'fr-FR') {
        this.dateValue = new Date(dateValue);
        this.locale = locale;
    }

    convertToDate() {
        return this.dateValue.toLocaleDateString(this.locale, {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
    }

    convertToHour() {
        return this.dateValue.toLocaleTimeString(this.locale, {
            hour: '2-digit',
            minute: '2-digit',
        });
    }
}