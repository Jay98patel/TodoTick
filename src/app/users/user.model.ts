import { keyValuePair } from "../shared/masterData/masterData";

export class User{
    id:number;
    firstName:string;
    userName:string;
    role:keyValuePair;
    status:string;
    workExpiriences:[];
    jobRole:keyValuePair[];
    acceptTerms:boolean;
    userDate:string;
    count:number;
}
