export const createEmptyArray = (length) => {
  return Array.from({ length: length }, (v, i) => i++);
};

export const generateRandomNumber = (start, end) => {
  return Math.floor(Math.random() * end) + start;
};
