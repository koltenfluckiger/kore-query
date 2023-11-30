const TYPE = {
  SECONDS: 1,
  MINUTES: 60,
  HOURS: 3600,
  DAYS: 86400,
  MILLISECONDS: 0.001,
} as const;

type TIMETYPE = (typeof TYPE)[keyof typeof TYPE];
class Time {
  public static TYPES: typeof TYPE = TYPE;

  public static daysToSeconds(days: number) {
    return Math.floor(Math.abs(days * 86400));
  }
  public static minutesToSeconds(minutes: number) {
    return Math.floor(Math.abs(minutes * 60));
  }
  public static hoursToSeconds(hours: number) {
    return Math.floor(Math.abs(hours * 3600));
  }
  public static secondsToMinutes(seconds: number) {
    return Math.floor(Math.abs(seconds / 60));
  }
  public static minutesToHours(minutes: number) {
    return Math.floor(Math.abs(minutes / 60));
  }
  public static secondsToHours(seconds: number) {
    return Math.floor(Math.abs(seconds / 3600));
  }
  public static secondsToDays(seconds: number) {
    return Math.floor(Math.abs(seconds / 86400));
  }
  public static secondsToMilliseconds(seconds: number) {
    return Math.floor(Math.abs(seconds * 1000));
  }

  public static convert({
    to,
    days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0,
  }: {
    to: TIMETYPE;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }): number {
    switch (+to) {
      case TYPE.SECONDS:
        return (
          this.daysToSeconds(days) +
          this.hoursToSeconds(hours) +
          this.minutesToSeconds(minutes) +
          seconds
        );
      case TYPE.MILLISECONDS:
        const totalSeconds =
          this.daysToSeconds(days) +
          this.hoursToSeconds(hours) +
          this.minutesToSeconds(minutes) +
          seconds;
        return this.secondsToMilliseconds(totalSeconds);
      case TYPE.MINUTES:
        return (
          this.daysToSeconds(days) +
          this.hoursToSeconds(hours) +
          this.minutesToSeconds(minutes) +
          seconds
        );
      default:
        return 60000;
    }
  }
}

export {TIMETYPE, TYPE, Time};
