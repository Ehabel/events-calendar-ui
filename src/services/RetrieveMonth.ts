export const getMonth = (customYear?: number, customMonth?: number) => {
    const date = new Date();
    let monthString;
    let monthInfo;
    let monthInt;
    let daysInMonth;
    let currYear;
    let firstDay;
    let firstDayString;

    if (customYear && customMonth) {
        console.log(customMonth);
        monthInfo = new Date(customYear, customMonth - 1, 0);
        firstDay = new Date(customYear, customMonth - 2, 1);
    } else {
        monthInfo = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    }
    monthString = monthInfo.toLocaleDateString("default", {
        month: "long",
    });
    firstDayString = firstDay.toLocaleDateString("default", {
        weekday: "long",
    });
    monthInt = monthInfo.getMonth() + 1;
    daysInMonth = monthInfo.getDate();
    currYear = monthInfo.getFullYear();
    return { monthString, monthInt, daysInMonth, currYear, firstDayString };
};
