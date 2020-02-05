import { GetUserComponent } from './get-user/get-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UpdateUserComponent } from './update-user/update-user.component';


const routes: Routes = [
  {path : 'Login', component : LoginComponent },
  {path : '', component: RegisterComponent  },
  {path : 'Details', component: UserDetailComponent},
  {path : 'Delete', component: DeleteUserComponent},
  {path : 'Search', component: GetUserComponent},
  {path: 'Update', component: UpdateUserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
