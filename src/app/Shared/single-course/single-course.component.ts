import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../Services/course.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CourseCardComponent } from "../course-card/course-card.component";

@Component({
  selector: 'app-single-course',
  imports: [CommonModule, HeaderComponent, FooterComponent, CourseCardComponent],
  templateUrl: './single-course.component.html',
  styleUrl: './single-course.component.css'
})
export class SingleCourseComponent implements OnInit {
  courseId: string = '';
  courseData!: { title: string, chapter: number, duration: number, desc: string, level: string, quizes: number, author: string, url: string, Modules: string[] };
  safeResourceURL!: SafeResourceUrl;

  course_detail = [
    {title: "C# Fundamentals", chapter: 10, duration: 5, desc: "Fundamentals Programming, Object Oriented Programming, Collections, .NET, Linq", level: "All", quizes: 5, author: "Kausthuban", url: "https://www.youtube.com/embed/V7BAEURmPvA?si=mls3BQ2YjKW57A3n", Modules: ["Sample Text", "Sample Text", "Sample Text"]},
    {title: "C# Fundamentals", chapter: 10, duration: 5, desc: "Fundamentals Programming, Object Oriented Programming, Collections, .NET, Linq", level: "All", quizes: 5, author: "Kausthuban", url: "https://www.youtube.com/embed/V7BAEURmPvA?si=mls3BQ2YjKW57A3n", Modules: ["Sample Text", "Sample Text", "Sample Text"]},
    {title: "C# Fundamentals", chapter: 10, duration: 5, desc: "Fundamentals Programming, Object Oriented Programming, Collections, .NET, Linq", level: "All", quizes: 5, author: "Kausthuban", url: "https://www.youtube.com/embed/V7BAEURmPvA?si=mls3BQ2YjKW57A3n", Modules: ["Sample Text", "Sample Text", "Sample Text"]},
    {title: "C# Fundamentals", chapter: 10, duration: 5, desc: "Fundamentals Programming, Object Oriented Programming, Collections, .NET, Linq", level: "All", quizes: 5, author: "Kausthuban", url: "https://www.youtube.com/embed/V7BAEURmPvA?si=mls3BQ2YjKW57A3n", Modules: ["Sample Text", "Sample Text", "Sample Text"]},
    {title: "C# Fundamentals", chapter: 10, duration: 5, desc: "Fundamentals Programming, Object Oriented Programming, Collections, .NET, Linq", level: "All", quizes: 5, author: "Kausthuban", url: "https://www.youtube.com/embed/V7BAEURmPvA?si=mls3BQ2YjKW57A3n", Modules: ["Sample Text", "Sample Text", "Sample Text"]},
    {title: "C# Fundamentals", chapter: 10, duration: 5, desc: "Fundamentals Programming, Object Oriented Programming, Collections, .NET, Linq", level: "All", quizes: 5, author: "Kausthuban", url: "https://www.youtube.com/embed/V7BAEURmPvA?si=mls3BQ2YjKW57A3n", Modules: ["Sample Text", "Sample Text", "Sample Text"]}
  ];

  constructor(private route: ActivatedRoute, private router: Router, private courseService: CourseService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.courseId = params.get('id') || '';
      console.log('Course ID from URL:', this.courseId);
    });

    this.courseData = this.courseService.getCurrentCourse();

    if (!this.courseData) {
      console.warn('No course data found in service!');
    } else {
      this.safeResourceURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.courseData.url+'/');
      console.log('Received course from service:', this.courseData);
    }
  }

  navigateToCart(){
    this.router.navigate(['/cart']);
  }
}
