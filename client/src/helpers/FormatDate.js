//export
export const FormatDate = (moment, type) => {
  const date = new Date(moment);
  let formattedDate;
  if (type === "normal") {
    formattedDate = `${date.getDate()}-${date.getMonth() +
      1}-${date.getFullYear()}`;
  } else {
    formattedDate = `${date.getMonth() +
      1}-${date.getDate()}-${date.getFullYear()}`;
  }
  return formattedDate;
};
