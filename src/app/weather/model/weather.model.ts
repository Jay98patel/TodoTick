import { keyValuePair } from "../../shared/masterData/masterData";

export class Weather{
    id:number;
    cityName:string;
    State:string;
    country:string;
    windSpeed:number;
    temparature:number;
    humidity:number;
    region:keyValuePair[];
}
