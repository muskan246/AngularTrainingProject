import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm : FormGroup;
  submitted = false;
  invalidRegister = false;
  value : any;
  errorMSg : any;
  constructor(private formBuilder: FormBuilder, private router: Router, private _userService : UserServiceService) { }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      console.log('Form invalid');
      alert('Please fill all required fields');
      return;
    } else {
      this.invalidRegister = true;
      console.log('Registered');
    }
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      id : ['',Validators.required],
      name: ['',[Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]],
      email: ['',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password : ['',[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]],
      mobile : ['',[Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
    });


  }
  onRegisterEmployee()
  {
    console.log('hey');
    console.log(this.registerForm.value);
    this._userService.createEmployee(this.registerForm.value).subscribe(data => this.value = data, error => this.errorMSg = error);
    console.log('createdd',(this.value));
  }
}
