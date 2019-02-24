const convertStringToValidId = str =>
  str
    .trim()
    .toLowerCase()
    .replace(/[^a-zA-Z0-9-_]/g, ' ')
    .replace(/\s+/g, ' ')
    .split(' ')
    .join('-');

export { convertStringToValidId };
