export interface Contact{
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phones?: [{
    type: string,
    number: string;
    primary: boolean;
  }];
  description: string;

}
