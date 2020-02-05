import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  deleteForm : FormGroup;
  errorMSg : any;
  deleterecord: any;
  user : any;

  constructor(private formBuilder: FormBuilder, private _userService : UserServiceService) { }

  ngOnInit() {
    this.deleteForm = this.formBuilder.group({
      id : [''],
    });
  }
  onDeleteEmployee()
  {
    console.log('ID to be deleted', this.deleteForm.value.id);
    if (this.deleteForm.value.id === '') {
    alert('Please provide valid ID');
    } else {
    // tslint:disable-next-line: max-line-length
    this._userService.deleteEmployeeById(this.deleteForm.value.id).subscribe(data => this.deleterecord = data, error => this.errorMSg = error);
    this._userService.getEmployees().subscribe(data => this.user = data, error => this.errorMSg = error);

    }
  }
}
