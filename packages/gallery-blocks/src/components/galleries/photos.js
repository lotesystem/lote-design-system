const wide = {
  src: 'https://picsum.photos/1200/600',
  width: 3,
  height: 2
};
const tall = {
  src: 'https://picsum.photos/800/1200',
  width: 2,
  height: 3
};
const square = {
  src: 'https://picsum.photos/800',
  width: 1,
  height: 1
};
const sizes = [wide, tall, square];
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const range = (start, end) =>
  new Array(end - start + 1).fill(undefined).map((_, i) => i + start);

const getRandomArray = size =>
  new Array(size).fill(undefined).map(() => {
    return getRandomInt(0, sizes.length - 1);
  });

export const getRandomPhotos = (num = 10) =>
  getRandomArray(num).map(el => {
    const width = getRandomInt(800, 1200);
    const height = getRandomInt(800, 1200);
    return {
      src: `https://picsum.photos/${width}/${height}`,
      width,
      height
    };
  });

export const photos = getRandomPhotos(10);
