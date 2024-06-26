import { randomNumberGenerator } from "./random-number-generator";

export function randomCharacterGenerator() {
  const character = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let newRandomSequece = "";

  for (let index = 0; index < 6; index++) {
    const randomIndex = randomNumberGenerator(0, character.length - 1);
    newRandomSequece += character.charAt(randomIndex);
  }
  return newRandomSequece;
}
