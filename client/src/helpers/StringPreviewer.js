export const StringPreviewer = (string, amount) => {
  const shortenedString = string.split("");
  let newString = [];

  for (let i = 0; i < amount; i++) {
    newString.push(shortenedString[i]);
  }
  return newString.join("") + "...";
};
