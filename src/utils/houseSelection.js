export function houseSelection(choices) {
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

export default houseSelection;