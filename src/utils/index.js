const pad = (number) => {
  return number < 10 ? `0${number}` : number;
}

export const formatTime = (time) => {
  const ms = Math.round(time / 100) % 10;
  const secs = Math.floor(time / 1000) % 60;
  const mins = Math.floor(time / 1000 / 60) % 60;
  const hours = Math.floor(time / 1000 / 60 / 60) % 60;
  return `${pad(hours)}:${pad(mins)}:${pad(secs)}.${ms}`;
}
