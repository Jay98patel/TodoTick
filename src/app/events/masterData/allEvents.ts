import { Events } from "../event.model";

export class AllEvents {

  public events: Events[] = [
    {
      id: 1, eventName: "IPL", eventLocation: "Mumbai"
    },
    {
      id: 2, eventName: "ICC World Cup", eventLocation: "Delhi"
    },
    {
      id: 3, eventName: "Singing Concert", eventLocation: "Tokyo"
    }
  ]
}