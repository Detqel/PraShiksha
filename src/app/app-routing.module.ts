import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Shared/header/header.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { ImageCardComponent } from './Shared/image-card/image-card.component';
import { CourseCardComponent } from './Shared/course-card/course-card.component';
import { OneLinerBannerComponent } from './Shared/one-liner-banner/one-liner-banner.component';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './courses/courses.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PricingComponent } from './pricing/pricing.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OneLinerBannerComponent,
    ImageCardComponent,
    CourseCardComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PricingComponent,
    CoursesComponent,
    CartComponent,
    CheckoutComponent,
    LoginComponent,
    BrowserModule, RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
