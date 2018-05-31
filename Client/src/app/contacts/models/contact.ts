import {Phone} from "./phone";
import {ContactHistory} from "./ContactHistory";

export interface Contact{
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  description: string;
  phones?: Phone[];
  history?: ContactHistory[];

}
