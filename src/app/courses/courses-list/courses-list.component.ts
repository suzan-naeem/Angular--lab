import { Course } from './../models/course.model';

import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  courses : Course[];
  constructor(private _courcesService : CoursesService) { }

  ngOnInit(): void {

    this._courcesService.getCourses().subscribe((res: any) => {
      console.log(res.data);
      this.courses = res.data;
    })
  }

}
