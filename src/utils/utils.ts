export function generateRandomColor(): string {
  const maxVal = 0xffffff; // 16777215
  let randomNumber = Math.random() * maxVal;
  randomNumber = Math.floor(randomNumber);
  const randomNumberString = randomNumber.toString(16);
  const randColor = randomNumberString.padStart(6, '0');
  return `#${randColor.toUpperCase()}`;
}
