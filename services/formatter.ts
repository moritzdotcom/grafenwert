export function userInputToNumberString(
  userInput: string,
  options?: { min?: number; max?: number; round?: boolean }
) {
  if (userInput === '') return '';
  const number = Number(userInput);
  if (isNaN(number)) {
    return '';
  }
  const { min, max, round } = options || {};
  if (typeof min == 'number' && number < min) {
    return String(min);
  }
  if (typeof max == 'number' && number > max) {
    return String(max);
  }
  if (round) {
    return String(Math.round(number));
  }
  return userInput;
}
