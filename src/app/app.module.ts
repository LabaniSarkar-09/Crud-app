import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CreateproComponent } from './createpro/createpro.component';

import { RouterModule } from '@angular/router';
import { AgePipe } from './age.pipe';
import { UserdataService } from './userdata.service';



@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomeComponent,
    AgePipe,
    CreateproComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    

  ],
  

  providers: [UserdataService],
  bootstrap: [AppComponent],

})
export class AppModule { }
