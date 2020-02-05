import { Post } from './../../../../ToDo/src/app/todos/post.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {
  getUserForm : FormGroup;
  public errorMSg : any;
  public getrecord ;
  public user ;

  constructor(private formBuilder: FormBuilder, private _userService : UserServiceService) { }

  ngOnInit() {
    this.getUserForm = this.formBuilder.group({
      id : [''],
    });
  }
  onGetEmployee()
  {
    console.log('ID of search', this.getUserForm.value.id);
    if (this.getUserForm.value.id === "") {
    alert('Please provide valid ID');
    } else{
    this._userService.getEmployeeById(this.getUserForm.value.id).subscribe(data => this.getrecord = data, error => this.errorMSg = error);
    //this._userService.getEmployees().subscribe(data => this.user = data, error => this.errorMSg = error);
  }
  }
}
