import { Component, OnInit } from '@angular/core';

import{FormGroup,FormControl} from '@angular/forms';
import { StudentService } from 'src/app/student.service';



@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent  implements OnInit{

  constructor(private studentServices:StudentService){}

addStudent=new FormGroup(
{
    id: new FormControl(''),
    name: new FormControl(''),
    Date: new FormControl(''),
    email: new FormControl(''),
    phone :new FormControl(''),
    address: new FormControl('')
 } );

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
//post methods
  saveData(){
//    console.log(this.addStudent.value);
    this.studentServices.saveStudentData(this.addStudent.value)
    .subscribe((result)=>{
      console.log(result);
    })
    ;
  }

}
