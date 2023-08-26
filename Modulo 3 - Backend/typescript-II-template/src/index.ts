/* PRÁTICA GUIADA - Parte 1
Crie um sistema de cadastro de usuários que contenha:

1. Type Alias para uma pessoa (TPerson) com as propriedades id, name, email, password e role;
2. Type Aliases para 2 contas (AdminAccount, NormalAccount) com as propriedades account e permission;
3. Crie exemplos de usuários Admin e Normal;
*/

/* PRÁTICA GUIADA - Parte 2
Vamos continuar nosso sistema de cadastro de usuários criando:

1. Enum com valores ADMIN e NORMAL e atribua ã propriedade role do Tperson;
2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);
3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;

*/

import { USER_ROLES } from "./enums";
import { TUserAccountAdmin, TUserAccountNormal } from "./types";

const person1: TUserAccountAdmin = {
  id: "01",
  name: "Ruan",
  email: "ruan@gmail.com",
  password: "123",
  account: "RuanHeleno",
  permission: USER_ROLES.ADMIN,
};

const person2: TUserAccountNormal = {
  id: "02",
  name: "Sida",
  email: "sidasantos@gmail.com",
  password: "123",
  account: "sidasantos",
  permission: USER_ROLES.NORMAL,
};

const persons: Array<TUserAccountAdmin> | Array<TUserAccountNormal> = [];
persons.push(person1);
persons.push(person2);

console.table(persons);