export const calculateAge = (dob: Date) => {
    const currentDate = new Date();
    let years = currentDate.getFullYear() - dob.getFullYear();
    const monthDiff = currentDate.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < dob.getDate())) {
        years--;
    }
    return years;
};

export const renderDate = () => {
    const date = new Date();
    return date.toDateString();
};