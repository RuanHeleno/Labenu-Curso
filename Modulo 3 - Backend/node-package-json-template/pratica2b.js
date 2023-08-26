import { countries } from "./countries.js";

const country = process.argv[2].toLowerCase();

if (!country) {
  console.log("Digite o país para buscar!");
} else {
  const getCountry = countries.filter((item) =>
    item.name.toLowerCase()[0].includes(country)
  );

  console.log(getCountry);
}
