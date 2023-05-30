export const getMonth = (customYear?: number, customMonth?: number) => {
    const date = new Date();
    let monthString;
    let monthInfo;
    let monthInt;
    let daysInMonth;

    if (customYear && customMonth) {
        monthInfo = new Date(customYear, customMonth - 1, 0);
        monthString = monthInfo.toLocaleDateString("default", {
            month: "long",
        });
        monthInt = date.getMonth() + 1;
        daysInMonth = monthInfo.getDate();
    } else {
        monthInfo = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        monthString = monthInfo.toLocaleDateString("default", {
            month: "long",
        });
        monthInt = date.getMonth() + 1;
        daysInMonth = monthInfo.getDate();
    }
    return { monthString, monthInt, daysInMonth };
};
