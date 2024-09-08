import { Component, Input } from '@angular/core';
import { Housinglocation } from "../housinglocation";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-housinglocation',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './housinglocation.component.html',
  styleUrl: './housinglocation.component.css'
})
export class HousinglocationComponent {
  @Input() housingLocation!: Housinglocation;
}
