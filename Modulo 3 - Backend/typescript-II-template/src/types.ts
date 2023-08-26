import { USER_ROLES } from "./enums";

type TPerson = {
  id: string | number;
  name: string;
  email: string;
  password: string;
}

type TAdminAccount = { 
  account: string;
  permission: USER_ROLES;
}

type TNormalAccount = { 
  account: string;
  permission: USER_ROLES;
}

export type TUserAccountAdmin = TPerson & TAdminAccount;
export type TUserAccountNormal = TPerson & TNormalAccount;