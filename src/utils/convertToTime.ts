export function convertToTime(miliseconds: number) {
  const time = new Date(miliseconds * 1000);
  return time.toLocaleTimeString(navigator.language, { timeZone: 'utc', hourCycle: 'h23' });
}
