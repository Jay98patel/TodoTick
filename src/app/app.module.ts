import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoService } from './todo/services/todo.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NotifierModule } from 'angular-notifier';
import { customNotifierOptions } from './shared/notifier';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { TodoTickButtonModule } from './shared Module/todo-tick-button/todo-tick-button.module';
import { LifeCycleHookComponent } from './life-cycle-hook/life-cycle-hook.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    LifeCycleHookComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    TodoTickButtonModule,
    NotifierModule.withConfig(customNotifierOptions)
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
