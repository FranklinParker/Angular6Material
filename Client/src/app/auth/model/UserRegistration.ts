import {User} from "./User";

export interface UserRegistration extends User{
  cellPhone?: string;
  password: string;

}
