export const formatDate = (datetimeString, locale = 'en-US') => {
    const date = new Date(datetimeString);
    
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
        timeZone: 'Asia/Jakarta',
    };
    
    const formatter = new Intl.DateTimeFormat(locale, options);
    const formattedDate = formatter.format(date);
    const regexPattern = /(\d{1,2})(?:st|nd|rd|th)?/
    
    return formattedDate.replace(regexPattern, (match, day) => {
        const suffixes = ['th', 'st', 'nd', 'rd'];
        const relevantDigits = day.slice(-2);
        const suffix = suffixes[relevantDigits] || suffixes[0];
        return `${day}${suffix}`;
    });
};
