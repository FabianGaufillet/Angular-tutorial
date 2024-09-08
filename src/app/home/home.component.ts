import { Component } from '@angular/core';
import { HousinglocationComponent } from "../housinglocation/housinglocation.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousinglocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
