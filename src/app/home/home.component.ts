import { Component } from '@angular/core';
import { BestSellersComponent } from "../bestSellers/bestSellers.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BestSellersComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
