import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  submitted = false;
  invalidRegister = false;
  updateForm : FormGroup;
  public errorMSg : any;
  public updaterecord ;
  public user ;
  public value;
  constructor(private formBuilder: FormBuilder, private _userService : UserServiceService) { }



  ngOnInit() {
    this.updateForm = this.formBuilder.group({
      id : [''],
      name: ['',[Validators.pattern('^[a-zA-Z \-\']+')]],
      email: ['',[Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password : ['',[Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]],
      mobile : ['',[Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],

    });
  }



  onUpdateEmployee(){

    console.log('ID of update', this.updateForm.value.id);
    if (this.updateForm.value.id === "") {
    alert('Please provide valid ID');
    }
    else{

    console.log('form values', this.updateForm.value)
    this._userService.getEmployeeById(this.updateForm.value.id).subscribe(data => this.updaterecord = data, error => this.errorMSg = error);
    this._userService.getEmployees().subscribe(data => this.user = data, error => this.errorMSg = error);

  }
  }
  updateRecord(){
    if (this.updateForm.invalid) {
    console.log('Form invalid');
    alert('Please fill proper details');
    return;
  } else {
    console.log('form values', this.updateForm.value);
    console.log('Previous values', this.updaterecord);
    if (this.updateForm.value.name === '' ) {
    this.updateForm.value.name = this.updaterecord.name;
    }

    if (this.updateForm.value.email === '' ) {
    this.updateForm.value.email = this.updaterecord.email;
    }

    if (this.updateForm.value.password === '' ) {
    this.updateForm.value.password = this.updaterecord.password;
    }

    if (this.updateForm.value.mobile === '') {
    this.updateForm.value.mobile = this.updaterecord.mobile;
    }


    this._userService.updateEmployee(this.updateForm.value).subscribe(data => this.value = data, error => this.errorMSg = error);
    console.log('updatedd',(this.value));
  }
}
}
