import { Injectable } from '@angular/core';
import { TeacherModel } from '../models/teacherModel';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  teachers: TeacherModel[] = [];

  constructor() { }

  addTeacher(teacherModel:TeacherModel, formData:any) {
    this.teachers.push(teacherModel);
  }
}
