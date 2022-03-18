"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fdtfK2 = exports.fdtfK1 = exports.fdtfM9 = exports.fdtfM8 = exports.fdtfM7 = exports.fdtfM6 = exports.fdtfM5 = exports.fdtfM4 = exports.fdtfM3 = exports.fdtfM2 = exports.fdtfM1 = exports.fdtfM3Plus = exports.asDateTime = exports.dateTime = exports.momentDateToString = void 0;
const moment_1 = __importDefault(require("moment"));
const momentDateToString = (date = (0, moment_1.default)(), format = 'YYYY-MM-DD') => {
    return (0, moment_1.default)((0, moment_1.default)(date), format).format(format);
};
exports.momentDateToString = momentDateToString;
const parseDT = (dt = null, format) => parseInt((0, exports.momentDateToString)(dt ? (0, moment_1.default)(dt) : (0, moment_1.default)(), format));
const sameYear = (dt1, dt2 = (0, moment_1.default)()) => {
    const s1 = parseDT(dt1, 'YYYY');
    const s2 = parseDT(dt2, 'YYYY');
    return s1 === s2;
};
const addDateTime = (num = 1, time = 'd', format = 'DD/MM/YYYY') => (0, exports.momentDateToString)((0, moment_1.default)().add(num, time), format);
const subtractDateTime = (num = 1, time = 'd', format = 'DD/MM/YYYY') => (0, exports.momentDateToString)((0, moment_1.default)().subtract(num, time), format);
const getWeekDay = (dt = (0, moment_1.default)()) => {
    const getDay = (0, moment_1.default)(dt).day();
    return getDay === 0 ? 'Chủ nhật' : `Thứ ${getDay + 1}`;
};
const dateTime = (endTime = (0, moment_1.default)(), startTime = (0, moment_1.default)(), isPast = false, isAbs = false) => {
    let timeLeft = (0, moment_1.default)(endTime || (0, moment_1.default)()).diff((0, moment_1.default)(startTime || (0, moment_1.default)()));
    if (timeLeft < 0 && isPast === false) {
        timeLeft = 0;
    }
    const seconds = moment_1.default.duration(timeLeft).seconds();
    const minutes = moment_1.default.duration(timeLeft).minutes();
    const hours = Math.trunc(moment_1.default.duration(timeLeft).hours());
    const days = Math.trunc(moment_1.default.duration(timeLeft).days());
    const weeks = Math.trunc(moment_1.default.duration(timeLeft).weeks());
    const months = Math.trunc(moment_1.default.duration(timeLeft).months());
    const years = Math.trunc(moment_1.default.duration(timeLeft).years());
    if (isAbs)
        return {
            timeLeft: Math.abs(timeLeft),
            years: Math.abs(years),
            months: Math.abs(months),
            weeks: Math.abs(weeks),
            days: Math.abs(days),
            hours: Math.abs(hours),
            minutes: Math.abs(minutes),
            seconds: Math.abs(seconds),
        };
    return { timeLeft, years, months, weeks, days, hours, minutes, seconds };
};
exports.dateTime = dateTime;
const getDayMonth = (dt1, dt2) => {
    const date1 = parseDT(dt1, 'YYYYMMDDHHmmss');
    const date2 = parseDT(dt2, 'YYYYMMDDHHmmss');
    let t1, t2, days;
    if (date1 <= date2) {
        t1 = dt1;
        t2 = dt2;
    }
    else {
        t1 = dt2;
        t2 = dt1;
    }
    const y1 = parseDT(t1, 'YYYY');
    const y2 = parseDT(t2, 'YYYY');
    const m1 = parseDT(t1, 'MM');
    const m2 = parseDT(t2, 'MM');
    const d1 = parseDT(t1, 'DD');
    const d2 = parseDT(t2, 'DD');
    const dIM2 = (0, moment_1.default)(t2).daysInMonth();
    const months = (y2 - y1) * 12 + m2 - m1 + (d2 >= d1 || dIM2 === d2 ? 0 : -1);
    if (d2 >= d1) {
        days = d2 - d1;
    }
    else {
        const dIM = (0, moment_1.default)(t1).daysInMonth();
        days = dIM2 === d2 ? dIM - d1 : dIM - d1 + d2;
    }
    return { months, days };
};
const asDateTime = (endTime = (0, moment_1.default)(), startTime = (0, moment_1.default)(), isPast = false, isAbs = false) => {
    let timeLeft = (0, moment_1.default)(endTime).diff((0, moment_1.default)(startTime));
    if (timeLeft < 0 && isPast === false) {
        timeLeft = 0;
    }
    const asSeconds = moment_1.default.duration(timeLeft).asSeconds();
    const asMinutes = moment_1.default.duration(timeLeft).asMinutes();
    const asHours = Math.trunc(moment_1.default.duration(timeLeft).asHours());
    const asDays = Math.trunc(moment_1.default.duration(timeLeft).asDays());
    const asWeeks = Math.trunc(moment_1.default.duration(timeLeft).asWeeks());
    const asMonths = Math.trunc(moment_1.default.duration(timeLeft).asMonths());
    const asYears = Math.trunc(moment_1.default.duration(timeLeft).asYears());
    if (isAbs)
        return {
            timeLeft: Math.abs(timeLeft),
            asYears: Math.abs(asYears),
            asMonths: Math.abs(asMonths),
            asWeeks: Math.abs(asWeeks),
            asDays: Math.abs(asDays),
            asHours: Math.abs(asHours),
            asMinutes: Math.abs(asMinutes),
            asSeconds: Math.abs(asSeconds),
        };
    return {
        timeLeft,
        asYears,
        asMonths,
        asWeeks,
        asDays,
        asHours,
        asMinutes,
        asSeconds,
    };
};
exports.asDateTime = asDateTime;
const fdtfM3Plus = (dt, format = `HH[h]mm’ss’’ DD/MM`) => {
    if (sameYear(dt))
        return (0, exports.momentDateToString)(dt, format);
    return (0, exports.momentDateToString)(dt, `${format}/YYYY`);
};
exports.fdtfM3Plus = fdtfM3Plus;
const fdtfM1 = (dt, mx = 'm1b') => {
    var _a;
    let fm = '';
    if (mx === 'm1a') {
        fm = `HH[h]`;
        if (((_a = (0, moment_1.default)(dt)) === null || _a === void 0 ? void 0 : _a.hour()) < 10)
            return (0, exports.momentDateToString)(dt, `H[h]`);
    }
    if (mx === 'm1b')
        fm = `HH[h]mm[’]`;
    if (mx === 'm1c')
        fm = `HH[h]mm[’]ss[’’]`;
    return (0, exports.momentDateToString)(dt, `${fm}`);
};
exports.fdtfM1 = fdtfM1;
const fdtfM2 = (dt, mx = 'm2b') => {
    let fm = `HH[h]mm[']`;
    if (mx === 'm2a')
        fm = `YYYY`;
    if (mx === 'm2b')
        fm = `MM/YYYY`;
    if (mx === 'm2c')
        fm = `DD/MM`;
    if (mx === 'm2d')
        fm = `DD/MM/YYYY`;
    if (mx === 'm2e')
        fm = sameYear(dt) ? `DD/MM` : `DD/MM/YYYY`;
    return (0, exports.momentDateToString)(dt, fm);
};
exports.fdtfM2 = fdtfM2;
const fdtfM3 = (dt, mx = 'm3b') => {
    if (mx === 'm3a')
        return `${(0, exports.fdtfM1)(dt, 'm1b')} ${(0, exports.fdtfM2)(dt, 'm2e')}`;
    return `${(0, exports.fdtfM1)(dt, 'm1c')} ${(0, exports.fdtfM2)(dt, 'm2e')}`;
};
exports.fdtfM3 = fdtfM3;
const fdtfM4 = (dt, checkReturn = false) => {
    switch ((0, exports.momentDateToString)(dt, 'DD/MM/YYYY')) {
        case subtractDateTime(3):
            return 'Hôm kìa';
        case subtractDateTime(2):
            return 'Hôm kia';
        case subtractDateTime(1):
            return 'Hôm qua';
        case (0, exports.momentDateToString)((0, moment_1.default)(), 'DD/MM/YYYY'):
            return 'Hôm nay';
        case addDateTime(1):
            return 'Ngày mai';
        case addDateTime(2):
            return 'Ngày kia';
        case addDateTime(3):
            return 'Ngày kìa';
        default:
            return checkReturn ? false : (0, exports.fdtfM3Plus)(dt, `DD/MM`);
    }
};
exports.fdtfM4 = fdtfM4;
const fdtfM5 = (dt, checkReturn = false) => {
    const weekInput = (0, exports.momentDateToString)(dt, 'WW');
    if (weekInput === subtractDateTime(1, 'w', 'WW'))
        return 'Tuần trước';
    if (weekInput === (0, exports.momentDateToString)((0, moment_1.default)(), 'WW'))
        return 'Tuần này';
    if (weekInput === addDateTime(1, 'w', 'WW'))
        return 'Tuần sau';
    return checkReturn ? false : (0, exports.fdtfM3Plus)(dt, `DD/MM`);
};
exports.fdtfM5 = fdtfM5;
const fdtfM6 = (dt, checkReturn = false) => {
    const monthInput = (0, exports.momentDateToString)(dt, 'MM/YYYY');
    if (monthInput === subtractDateTime(1, 'M', 'MM/YYYY'))
        return 'Tháng trước';
    if (monthInput === (0, exports.momentDateToString)((0, moment_1.default)(), 'MM/YYYY'))
        return 'Tháng này';
    if (monthInput === addDateTime(1, 'M', 'MM/YYYY'))
        return 'Tháng sau';
    return checkReturn ? false : (0, exports.fdtfM3Plus)(dt, `DD/MM`);
};
exports.fdtfM6 = fdtfM6;
const fdtfM7 = (dt) => {
    return (0, exports.momentDateToString)(dt, `[${getWeekDay(dt)}, ngày] DD [tháng] MM [năm] YYYY`);
};
exports.fdtfM7 = fdtfM7;
const fdtfM8 = (dt) => {
    const getDay = (0, exports.momentDateToString)(dt, `DD/MM`);
    const date = (0, moment_1.default)(dt).date() < 11 ? 'Ngày mùng' : 'Ngày';
    const day = (0, exports.momentDateToString)(dt, `[${date}] D`);
    if ((0, exports.fdtfM4)(dt, true))
        return `${(0, exports.fdtfM4)(dt, true)} (${getDay})`;
    if ((0, exports.fdtfM5)(dt, true))
        return `${getWeekDay(dt)} ${(0, exports.fdtfM5)(dt, true)} (${getDay})`;
    if ((0, exports.fdtfM6)(dt, true))
        return `${day} ${(0, exports.fdtfM6)(dt, true)} (${getDay})`;
    if (sameYear(dt))
        return `${getDay} (${getWeekDay(dt)})`;
    return (0, exports.momentDateToString)(dt, `DD/MM/YYYY [(${getWeekDay(dt)})]`);
};
exports.fdtfM8 = fdtfM8;
const fdtfM9 = (dt, m) => {
    return `${(0, exports.fdtfM1)(dt, m)} ${(0, exports.fdtfM8)(dt)}`;
};
exports.fdtfM9 = fdtfM9;
const fdtfK1 = (dt1, dt2, kx = 'k1b') => {
    const isC1 = kx === 'k1a';
    const { timeLeft, hours, minutes, seconds } = (0, exports.dateTime)(dt1, dt2, true, true);
    const { days, months } = getDayMonth(dt1, dt2);
    const { asHours, asDays } = (0, exports.asDateTime)(dt1, dt2, true, true);
    if (timeLeft < 60000)
        return `${seconds} giây`;
    if (timeLeft < 60 * 60000)
        return `${minutes} phút${!isC1 && seconds !== 0 ? ` ${seconds} giây` : ''}`;
    if (timeLeft < 24 * 60 * 60000)
        return `${hours} giờ${!isC1 && minutes !== 0 ? ` ${minutes} phút` : ''}`;
    if (asHours >= 24 && asDays < 7)
        return `${asDays} ngày${!isC1 && asHours % 24 !== 0 ? ` ${asHours % 24} giờ` : ''}`;
    if (7 <= asDays && months === 0)
        return `${Math.trunc(days / 7)} tuần${!isC1 && days % 7 !== 0 ? ` ${days % 7} ngày` : ''}`;
    if (0 < months && months < 12)
        return `${months} tháng${!isC1 && days !== 0 ? ` ${days} ngày` : ''}`;
    return `${Math.trunc(months / 12)} năm${!isC1 && months % 12 !== 0 ? ` ${months % 12} tháng` : ''}`;
};
exports.fdtfK1 = fdtfK1;
const fdtfK2 = (dt, kx = 'k21b') => {
    const strC = kx.charAt(kx.length - 1) === 'a' ? 'k1a' : 'k1b';
    const { timeLeft } = (0, exports.asDateTime)(dt, (0, moment_1.default)(), true);
    if (-6000 < timeLeft && timeLeft < 0) {
        return 'Vừa quá hạn';
    }
    else if (0 <= timeLeft && timeLeft < 6000) {
        return 'Vừa xong';
    }
    else {
        const dtK = (0, exports.fdtfK1)(dt, (0, moment_1.default)(), strC);
        if (kx === 'k21a' || kx === 'k21b')
            return `${dtK} ${timeLeft < 0 ? 'trước' : 'sau'}`;
        return `${timeLeft < 0 ? 'Quá hạn' : 'Còn lại'} ${dtK}`;
    }
};
exports.fdtfK2 = fdtfK2;
