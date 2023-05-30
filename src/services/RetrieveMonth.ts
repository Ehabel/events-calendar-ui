export const getMonth = (customYear?: number, customMonth?: number) => {
    const date = new Date();
    let monthString;
    let monthInfo;
    let monthInt;
    let daysInMonth;
    let currYear;

    if (customYear && customMonth) {
        monthInfo = new Date(customYear, customMonth - 1, 0);
    } else {
        monthInfo = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    }
    monthString = monthInfo.toLocaleDateString("default", {
        month: "long",
    });
    monthInt = date.getMonth() + 1;
    daysInMonth = monthInfo.getDate();
    currYear = monthInfo.getFullYear();
    return { monthString, monthInt, daysInMonth, currYear };
};
