import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersResolver } from './resolver/users.resolver';
import { UserListComponent } from './user-list/user-list.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path:'',component:UsersComponent
  },
  {
    path:'users',component:UsersComponent
  },
  {
    path: 'userslist',
    component: UserListComponent,
    resolve: { userList: UsersResolver }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
