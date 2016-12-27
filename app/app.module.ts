import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router'
import {HttpModule} from '@angular/http';

import { AppComponent }  from './app.component';
import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from './dashboard.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService}  from './hero.service';

import {AppRoutingModule} from './app-routing.module';

//import for loading & configurting the in-memory web api

import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';




@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  HttpModule,
                  InMemoryWebApiModule.forRoot(InMemoryDataService),
                  AppRoutingModule ],
  declarations: [ AppComponent,HeroDetailComponent,HeroesComponent,DashboardComponent ],
  providers:    [HeroService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
