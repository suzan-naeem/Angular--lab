import { Course } from './../models/course.model';
import { Subscription } from 'rxjs';
import { Component, OnInit /*,OnDestroy*/ } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.scss']
})
export class CoursesDetailsComponent implements OnInit /*,OnDestroy*/ {
  id;
  course: Course
  private _routeParamSub: Subscription;
  constructor(private _route: ActivatedRoute, private _coursesService: CoursesService) { }

  ngOnInit(): void {
      this._route.paramMap.subscribe(paramMap => {
          if(paramMap.has('id')) {
            this._coursesService.getCourseById(paramMap.get('id')).subscribe((res : any) => {
              this.course = res.data;
            })
          }
          this.id = paramMap.has('id') ? paramMap.get('id') : null;
      });
  }

  // ngOnDestroy(): void {
  //   this._routeParamSub.unsubscribe();
  // }

}
