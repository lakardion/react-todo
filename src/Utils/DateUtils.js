export const getDateTimeString = (date) => {
  const hoursString = date.getHours().toString().padStart(2, "0");
  const minutesString = date.getMinutes().toString().padStart(2, "0");
  return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()} ${hoursString}:${minutesString}`;
};
