import { Injectable } from '@angular/core';
import {Housinglocation} from "./housinglocation";

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  readonly baseUrl = "https://angular.dev/assets/images/tutorials/common";
  url = "http://localhost:3000/locations";

  constructor() { }

  async getAllHousingLocations(): Promise<Housinglocation[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(id: number): Promise<Housinglocation | undefined> {
    const data = await fetch(`${this.url}?id=${id}`);
    const dataArray = await data.json();
    return (dataArray[0]) ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received : firstname: ${firstName}, lastname: ${lastName}, email: ${email}.`);
  }

}
