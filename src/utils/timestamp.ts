// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function convertTimestamp(date: string) {
  if (!date) {
    return;
  }
  const myDate = new Date(date);
  const d = myDate.getMonth() + 1 + '/' + myDate.getDate() + '/' + myDate.getFullYear();
  const spliting = d.split('/');
  spliting[0] = months[Number(spliting[0]) - 1];
  const formateDate = [spliting[1], spliting[0], spliting[2]];
  return formateDate.join(' ');
}

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
