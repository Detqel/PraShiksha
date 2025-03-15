import { Component } from '@angular/core';
import { HeaderComponent } from "../Shared/header/header.component";
import { FooterComponent } from "../Shared/footer/footer.component";

@Component({
  selector: 'app-cart',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

}
