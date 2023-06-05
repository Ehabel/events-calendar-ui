export const validateDates = (start: string, end: string) => {
    const a = new Date(start);
    const b = new Date(end);
    if (a > b) {
        throw new Error("Start date cannot be after end date");
    }
};
