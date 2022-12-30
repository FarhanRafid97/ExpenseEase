export const snakeCase = (string: string) => {
  if (!string) {
    return string;
  }
  return string
    .split(' ')
    .map((d) =>
      d
        .split('')
        .map((d, i) => (i === 0 ? d.toUpperCase() : d))
        .join(''),
    )
    .join(' ');
};
