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
import { customNotifierOptions } from './shared Folder/notifier';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { EventFormComponent } from './events/components/event-form/event-form.component';
import { EventListComponent } from './events/components/event-list/event-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    NotifierModule.withConfig(customNotifierOptions)
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
