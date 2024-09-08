import { Component, Input } from '@angular/core';
import { Housinglocation } from "../housinglocation";

@Component({
  selector: 'app-housinglocation',
  standalone: true,
  imports: [],
  templateUrl: './housinglocation.component.html',
  styleUrl: './housinglocation.component.css'
})
export class HousinglocationComponent {
  @Input() housingLocation!: Housinglocation;
}
