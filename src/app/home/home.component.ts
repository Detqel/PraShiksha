import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { OneLinerBannerComponent } from "../Shared/one-liner-banner/one-liner-banner.component";
import { HeaderComponent } from "../Shared/header/header.component";
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from "../Shared/course-card/course-card.component";
import { InstructorsComponent } from "../Shared/instructors/instructors.component";
import { FooterComponent } from "../Shared/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [OneLinerBannerComponent, HeaderComponent, CommonModule, CourseCardComponent, InstructorsComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit{
  counters = [
    { value: 100, label: 'Courses', currentValue: 0 },
    { value: 12, label: 'Countries', currentValue: 0 },
    { value: 500, label: 'Students', currentValue: 0 },
    { value: 10, label: 'Instructors', currentValue: 0 }
  ];

  @ViewChild('testimonialBanner') banner!: ElementRef;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.startCounting();
          observer.disconnect();
        }
      });
    });

    observer.observe(this.banner.nativeElement);
  }

  startCounting() {
    this.counters.forEach(counter => {
      let step = Math.ceil(counter.value / 50);
      let interval = setInterval(() => {
        counter.currentValue += step;
        if (counter.currentValue >= counter.value) {
          counter.currentValue = counter.value;
          clearInterval(interval);
        }
      }, 30);
    });
  }
}
