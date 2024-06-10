"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToPounds = exports.convertToAmPm = exports.formatDate = exports.getConfig = void 0;
const getConfig = (name, fallback = undefined) => {
    const value = process.env[name] || fallback;
    if (value === undefined) {
        throw `Environment variable ${name} is missing`;
    }
    return value;
};
exports.getConfig = getConfig;
const formatDate = function (date, format) {
    const replacePatterns = {
        'YYYY': date.getFullYear(),
        'MM': String(date.getMonth() + 1).padStart(2, '0'),
        'DD': String(date.getDate()).padStart(2, '0'),
        'hh': String(date.getHours()).padStart(2, '0'),
        'mm': String(date.getMinutes()).padStart(2, '0'),
        'ss': String(date.getSeconds()).padStart(2, '0'),
    };
    for (let pattern in replacePatterns) {
        format = format.replace(pattern, replacePatterns[pattern]);
    }
    return format;
};
exports.formatDate = formatDate;
const convertToAmPm = (timeStr) => {
    let [hours, minutes] = timeStr.split(":").map(str => parseInt(str, 10));
    let period = hours >= 12 ? "PM" : "AM";
    if (hours === 0) {
        hours = 12;
    }
    else if (hours > 12) {
        hours -= 12;
    }
    return `${hours}:${minutes.toString().padStart(2, '0')} ${period}`;
};
exports.convertToAmPm = convertToAmPm;
const convertToPounds = (weight, massUnit) => {
    switch (massUnit.toLowerCase()) {
        case 'kg':
            return weight * 2.20462;
        case 'g':
            return weight * 0.00220462;
        case 'oz':
            return weight / 16;
        case 'lb':
            return weight;
        default:
            throw new Error('Invalid massUnit provided.');
    }
};
exports.convertToPounds = convertToPounds;
//# sourceMappingURL=config.js.map