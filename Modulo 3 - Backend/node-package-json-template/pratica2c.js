import { countries } from "./countries.js";

const name = process.argv[2].toLowerCase();
const code = process.argv[3].toLowerCase();

if (!name || !code) {
  console.log("Digite o nome/código do país para inserir!");
} else {
  const getCountry = countries.find((item) =>
    item.name.toLowerCase().includes(name)
  );

  if (getCountry) {
    console.log(`${name} já está inserido no array`);
  } else {
    const newCountry = {
      name,
      code,
    };

    countries.push(newCountry);

    const countriesSort = countries.sort((a, b) => (a.name < b.name ? -1 : 1));

    console.log(countriesSort);
  }
}
