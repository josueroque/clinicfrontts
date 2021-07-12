export interface Patient{
  _id: string;
  name: string;
  lastName: string;
  idNumber:string;
  socialInsurance: string;
  address:string;
  city:string;
  phone:string;
  birthday:Date|null;
  maritalStatus:string;
  educationLevel:string;
  controlPlace:string;
  childBirthPlace:string;

}