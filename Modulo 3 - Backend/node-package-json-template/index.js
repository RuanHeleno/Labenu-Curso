import { countries } from "./countries.js";

const country = process.argv[2].toLowerCase();

if (!country) {
  console.log("Digite o país para buscar!");
} else {
  const getCountry = countries.find((item) =>
    item.name.toLowerCase().includes(country)
  );

  console.log(getCountry);
}
