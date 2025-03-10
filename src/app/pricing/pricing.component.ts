import { Component } from '@angular/core';
import { HeaderComponent } from "../Shared/header/header.component";
import { FooterComponent } from "../Shared/footer/footer.component";

@Component({
  selector: 'app-pricing',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {

}
