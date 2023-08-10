import { Component, OnInit } from '@angular/core';

import{FormGroup,FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';


@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit{
id:any;
constructor(private studentServices:StudentService,private route:ActivatedRoute){}

editStudent=new FormGroup(
  {
      id: new FormControl(''),
      name: new FormControl(''),
      Date: new FormControl(''),
      email: new FormControl(''),
      phone :new FormControl(''),
      address: new FormControl('')
   } );
  
    ngOnInit() {
    //  console.log(this.route.snapshot.params['id']);
      this.studentServices.getStudentById(this.route.snapshot.params['id'])
      .subscribe((result:any)=>{
      console.log(result);

       this.editStudent=new FormGroup(
     {  id: new FormControl(result.id),
        name: new FormControl(result.name),
        Date: new FormControl(result.Date),
        email: new FormControl(result.email),
        phone :new FormControl(result.phone),
        address: new FormControl(result.address)

        }
       )
      });

  
    }
  //post methods
    updateData(){

      //console.log(this.editStudent.value);
    this.studentServices.updateStudentData(this.route.snapshot.params['id'], this.editStudent.value)
    .subscribe((result:any)=>{
      console.log(result);
    })
  
  
  
  
  
  
  
      /* console.log(this.addStudent.value);
      this.studentServices.saveStudentData(this.editStudent.value)
      .subscribe((result)=>{
        console.log(result);
      })
      ;*/

    }
  
  }
  