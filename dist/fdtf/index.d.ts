import moment from 'moment';
declare type Moment = moment.Moment;
declare type FlexiDate = string | Moment;
declare type M1Format = 'm1a' | 'm1b' | 'm1c';
declare type M2Format = 'm2a' | 'm2b' | 'm2c' | 'm2d' | 'm2e';
declare type M3Format = 'm3a' | 'm3b';
declare type K1Format = 'k1a' | 'k1b';
declare type K2Format = 'k21a' | 'k21b' | 'k22a' | 'k22b';
export declare const momentDateToString: (date?: FlexiDate, format?: string) => string;
export declare const dateTime: (endTime?: FlexiDate, startTime?: FlexiDate, isPast?: boolean, isAbs?: boolean) => {
    timeLeft: number;
    years: number;
    months: number;
    weeks: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};
export declare const asDateTime: (endTime?: FlexiDate, startTime?: FlexiDate, isPast?: boolean, isAbs?: boolean) => {
    timeLeft: number;
    asYears: number;
    asMonths: number;
    asWeeks: number;
    asDays: number;
    asHours: number;
    asMinutes: number;
    asSeconds: number;
};
export declare const fdtfM3Plus: (dt: FlexiDate, format?: string) => string;
export declare const fdtfM1: (dt: FlexiDate, mx?: M1Format) => string;
export declare const fdtfM2: (dt: FlexiDate, mx?: M2Format) => string;
export declare const fdtfM3: (dt: FlexiDate, mx?: M3Format) => string;
export declare const fdtfM4: (dt: FlexiDate, checkReturn?: boolean) => string | false;
export declare const fdtfM5: (dt: FlexiDate, checkReturn?: boolean) => string | false;
export declare const fdtfM6: (dt: FlexiDate, checkReturn?: boolean) => string | false;
export declare const fdtfM7: (dt: FlexiDate) => string;
export declare const fdtfM8: (dt: FlexiDate) => string;
export declare const fdtfM9: (dt: FlexiDate, m: M1Format) => string;
export declare const fdtfK1: (dt1: FlexiDate, dt2: FlexiDate, kx?: K1Format) => string;
export declare const fdtfK2: (dt: FlexiDate, kx?: K2Format) => string;
export {};
//# sourceMappingURL=index.d.ts.map