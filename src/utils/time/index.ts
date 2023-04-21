enum TYPE {
    SECONDS = 1,
    MINUTES = 60,
    HOURS = 3600,
    DAYS = 86400,
}

class Time {

    public static daysToSeconds(days: number) {
        return Math.floor(Math.abs(days * 86400));
    }
    public static minutesToSeconds(minutes: number) {
        return Math.floor(Math.abs(minutes * 60));
    }
    public static hoursToSeconds(hours: number) {
        return Math.floor(Math.abs(hours * 3600));
    }

    public static convert({ to, days, hours, minutes, seconds }: { to: TYPE, days: number, hours: number, minutes: number, seconds: number }): number {
        switch (+to) {
            case TYPE.SECONDS:
                return this.daysToSeconds(days) + this.hoursToSeconds(hours) + this.minutesToSeconds(minutes) + seconds;
            default:
                return 60000;
        }
    }

}
export { TYPE, Time };
