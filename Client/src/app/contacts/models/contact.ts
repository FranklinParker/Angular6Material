import {Phone} from "./phone";

export interface Contact{
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phones?: Phone[];
  description: string;

}
