export class StringUtils {
    public static isNullOrEmpty(value: string) : boolean {
        if (value === undefined || value === null || value.trim() === '') {
            return true;
        } 
        return false;
    }
}