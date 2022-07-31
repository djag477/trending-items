/* An object per bicycle model
with a Repl (umbrella model name) and Picture 
and regular expressions to do the matchi and assigning of the Repl and Picture*/

const ecfive = {
  model: "EC 5",
  picture: "ec.webp",
  a: new RegExp(/ec/i),
};
const beryll = {
  model: "Beryll",
  picture: "beryll.webp",
  a: new RegExp(/beryll/i),
};
const dirtdrifter = {
  model: "Dirt Drifter 3000",
  picture: "dirtdrifter.webp",
  a: new RegExp(/dirt/i),
  b: new RegExp(/drifter/i),
  c: new RegExp(/drift/i),
};
const etnineevo = {
  model: "ET 9 Evo",
  picture: "etevo.webp",
  a: new RegExp(/et/i),
  b: new RegExp(/evo/i),
};
const juna = {
  model: "Juna",
  picture: "juna.webp",
  a: new RegExp(/juna/i),
};
const velossi = {
  model: "Velossi",
  picture: "velossi.webp",
  a: new RegExp(/velossi/i),
  b: new RegExp(/velosi/i),
};
const mandara = {
  model: "Mandara",
  picture: "mandara.webp",
  a: new RegExp(/mandara/i),
};

export const replData = [
  ecfive,
  beryll,
  dirtdrifter,
  etnineevo,
  juna,
  velossi,
  mandara,
];
