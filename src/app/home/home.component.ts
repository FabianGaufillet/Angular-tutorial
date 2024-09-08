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
  filteredLocationList: Housinglocation[] = [];

  constructor(private housingService: HousingService) {
    this.housingService.getAllHousingLocations()
      .then((housingLocationList: Housinglocation[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = housingLocationList;
      });
  }

  filterResults(text:string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter(housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase()));
  }

}
