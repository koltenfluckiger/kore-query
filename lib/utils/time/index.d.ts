declare const TYPE: {
    readonly SECONDS: 1;
    readonly MINUTES: 60;
    readonly HOURS: 3600;
    readonly DAYS: 86400;
    readonly MILLISECONDS: 0.001;
};
type TIMETYPE = (typeof TYPE)[keyof typeof TYPE];
declare class Time {
    static TYPES: typeof TYPE;
    static daysToSeconds(days: number): number;
    static minutesToSeconds(minutes: number): number;
    static hoursToSeconds(hours: number): number;
    static secondsToMinutes(seconds: number): number;
    static minutesToHours(minutes: number): number;
    static secondsToHours(seconds: number): number;
    static secondsToDays(seconds: number): number;
    static secondsToMilliseconds(seconds: number): number;
    static convert({ to, days, hours, minutes, seconds, }: {
        to: TIMETYPE;
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
    }): number;
}
export { TIMETYPE, TYPE, Time };
