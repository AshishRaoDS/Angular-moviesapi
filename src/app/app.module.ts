import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';

import {HttpClientModule} from '@angular/common/http';
import { ActionComponent } from './action/action.component';
import { ComidiesComponent } from './comidies/comidies.component';
import { ThrillerComponent } from './thriller/thriller.component';
import { SupermanComponent } from './superman/superman.component';
import { RomanticComponent } from './romantic/romantic.component';
import { ScaryComponent } from './scary/scary.component';
import { DramaComponent } from './drama/drama.component';
import { SuspenseComponent } from './suspense/suspense.component';
import { AnimatedComponent } from './animated/animated.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
        ActionComponent,
        ComidiesComponent,
        ThrillerComponent,
        SupermanComponent,
        RomanticComponent,
        ScaryComponent,
        DramaComponent,
        SuspenseComponent,
        AnimatedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
