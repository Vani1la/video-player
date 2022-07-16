export const msToTime = (ms) => {
  let milliseconds: string | number = Math.floor(ms % 1000);
  let seconds: string | number = Math.floor((ms / 1000) % 60);
  let minutes: string | number = Math.floor((ms / (1000 * 60)) % 60);

  if (minutes < 10) minutes = `0${minutes}`;
  if (seconds < 10) seconds = `0${seconds}`;
  if (milliseconds < 100) {
    milliseconds = `0${milliseconds}`;
  } else if (milliseconds < 10) {
    milliseconds = `00${milliseconds}`;
  }

  return `${minutes}:${seconds}:${milliseconds}`;
};
