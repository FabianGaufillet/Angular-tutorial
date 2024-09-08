import { Component } from '@angular/core';
import { HousinglocationComponent } from "../housinglocation/housinglocation.component";
import { Housinglocation } from "../housinglocation";
import { HousingService } from "../housing.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousinglocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingLocationList: Housinglocation[] = [];

  constructor(private housingService: HousingService) {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }

}
