export const getMonthYearFromDate = (dateObject: Date) => {
  if (dateObject.toString() === 'Invalid Date') return '00/00';

  const month = dateObject.getMonth() + 1;
  const fullMonth = month < 10 ? `0${month}` : month;
  const fullYear = dateObject.getFullYear();

  return `${fullMonth}/${fullYear}`;
}

export const getDateMonthFromDate = (dateObject: Date) => {
  if (dateObject.toString() === 'Invalid Date') return '00/00';

  const date = dateObject.getDate();
  const month = dateObject.getMonth() + 1;
  const fullDate = date < 10 ? `0${date}` : date;
  const fullMonth = month < 10 ? `0${month}` : month;

  return `${fullDate}.${fullMonth}`;
}
