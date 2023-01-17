export default function two_crystal_balls(breaks: boolean[]): number {
  const jumpAmount = Math.floor(Math.sqrt(breaks.length));
  let index = jumpAmount;

  for (; index < breaks.length; index = index + jumpAmount) {
    if (breaks[index]) {
      break;
    }
  }

  index = index - jumpAmount;

  for (let j = 0; j < jumpAmount && index < breaks.length; j++, index++) {
    if (breaks[index]) {
      return index;
    }
  }

  return -1;
}

