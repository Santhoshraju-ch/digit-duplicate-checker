import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url='http://localhost:3000/employees';
  constructor(private http:HttpClient) { }
//get methods request
  getAllStudent(){
    return this.http.get(this.url);
  }

//post method request

saveStudentData(data: any){
  console.log(data);
  return this.http.post(this.url,data);

}

//delete method request

deleteStudent(id:any){
  return this.http.delete(`${this.url}/${id}`);
}

//

getStudentById(id:number){
  return this.http.get(`${this.url}/${id}`);

}

//
updateStudentData(id:any, data:any){
  return this.http.put(`${this.url}/${id}`,data);

}

}
