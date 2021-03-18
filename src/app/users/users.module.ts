import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { UsersResolver } from './resolver/users.resolver';


@NgModule({
  declarations: [UsersComponent, UserListComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ],
  providers:[UserService,UsersResolver]
})
export class UsersModule { }
