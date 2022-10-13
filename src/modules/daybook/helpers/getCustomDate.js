const getCustomDate = dateString => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const date = new Date(dateString);
  return {
    day: date.getDate(),
    month: months[date.getMonth()],
    year: date.getFullYear(),
  };
};

export default getCustomDate;
