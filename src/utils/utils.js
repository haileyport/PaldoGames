export const createEmptyArray = (length) => {
  return Array.from({ length: length }, (v, i) => i++);
};

export const generateRandomNumber = (start, end) => {
  return Math.floor(Math.random() * end) + start;
};

export const uuidV4 = () => {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
};

export const debounceFunction = (callback, delay) => {
  let timer;

  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => callback(...args), delay);
  };
};
