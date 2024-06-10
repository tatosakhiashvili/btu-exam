export const getConfig = (name: string, fallback = undefined) => {
    const value = process.env[name] || fallback;
    if (value === undefined) { throw `Environment variable ${name} is missing`; }
    return value;
};

export const formatDate = function (date: Date, format: string) {
    const replacePatterns = {
        'YYYY': date.getFullYear(),
        'MM': String(date.getMonth() + 1).padStart(2, '0'),  // Month is 0-indexed
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

export const convertToAmPm = (timeStr: string) => {
    let [hours, minutes] = timeStr.split(":").map(str => parseInt(str, 10));

    let period = hours >= 12 ? "PM" : "AM";

    if (hours === 0) {
        hours = 12;
    } else if (hours > 12) {
        hours -= 12;
    }

    return `${hours}:${minutes.toString().padStart(2, '0')} ${period}`;
}

export const convertToPounds = (weight: number, massUnit: string) => {
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
}