import { UserServiceService } from './../user-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
public user = [];
public value ;
public deleterecord ;
public errorMSg;
  constructor(private _userService : UserServiceService) { }

  ngOnInit() {
  this._userService.getEmployees().subscribe(data => this.user = data, error => this.errorMSg = error);
  console.log('aa', this.user);

}

}
