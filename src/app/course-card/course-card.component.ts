import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  TemplateRef,
} from "@angular/core";
import { CourseImageComponent } from "../course-image/course-image.component";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent
  implements OnInit, AfterViewInit, AfterContentInit {
  @Input() course: Course;
  @Input() cardIndex: number;

  @Input() noImgTpl: TemplateRef<any>;

  @Output() courseSelected = new EventEmitter<Course>();

  @ContentChildren(CourseImageComponent, { read: ElementRef })
  images: QueryList<CourseImageComponent>;

  constructor() {}

  ngAfterContentInit(): void {
    console.log(this.images);
  }

  ngAfterViewInit(): void {
    console.log(this.images);
  }

  ngOnInit(): void {}

  onCourseViewed(): void {
    console.log(`clicked`);

    this.courseSelected.emit(this.course);
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  cardClasses() {
    if (this.course.category === "BEGINNER") {
      return ["beginner"];
    }
  }

  cardStyles() {
    return {
      "background-image": `url(${this.course.iconUrl})`,
    };
  }
}
