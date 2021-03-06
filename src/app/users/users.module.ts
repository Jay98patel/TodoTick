import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './services/user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UsersResolver } from './resolver/users.resolver';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { masterData } from '../shared/masterData/masterData';
import { HttpErrorInterceptor } from './services/httpInterceptor';
import { GlobalErrorHandlerService } from './services/global-error-handler.service';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { UserListService } from './services/user-list.service';


@NgModule({
  declarations: [UsersComponent, UserListComponent,UserFormComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule,
    
  ],
  providers:[
    UserService,
    UsersResolver,
    UserListService,
    masterData,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    {
      provide:ErrorHandler,
      useClass:GlobalErrorHandlerService
    }
  ]
})
export class UsersModule { }
