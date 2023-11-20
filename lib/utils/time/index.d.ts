declare enum TYPE {
    SECONDS = 1,
    MINUTES = 60,
    HOURS = 3600,
    DAYS = 86400
}
declare class Time {
    static daysToSeconds(days: number): number;
    static minutesToSeconds(minutes: number): number;
    static hoursToSeconds(hours: number): number;
    static convert({ to, days, hours, minutes, seconds }: {
        to: TYPE;
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
    }): number;
}
export { TYPE, Time };
