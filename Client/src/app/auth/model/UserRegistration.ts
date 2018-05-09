import {User} from "./User";

export interface UserRegistration extends User{
  firstName: string;
  lastName: string;
  cellPhone?: string;
  password: string;

}
