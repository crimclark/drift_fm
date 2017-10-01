const randomVal = array => {
  const i = Math.floor(Math.random() * array.length);
  return array[i];
};

const rates = [0.5, 1, 2, 4];

export {randomVal, rates};
