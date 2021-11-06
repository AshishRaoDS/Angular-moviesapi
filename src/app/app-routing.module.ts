import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionComponent } from './action/action.component';
import { AnimatedComponent } from './animated/animated.component';
import { AppComponent } from './app.component';

import { ComidiesComponent } from './comidies/comidies.component';
import { DramaComponent } from './drama/drama.component';
import { RomanticComponent } from './romantic/romantic.component';
import { ScaryComponent } from './scary/scary.component';
import { SupermanComponent } from './superman/superman.component';
import { SuspenseComponent } from './suspense/suspense.component';
import { ThrillerComponent } from './thriller/thriller.component';

const routes: Routes = [
  
    {path:"action",component:ActionComponent},
    {path:"comedy",component:ComidiesComponent},
    {path:"thriller",component:ThrillerComponent},
    {path:"superman", component:SupermanComponent},
    {path:"romantic",component:RomanticComponent},
    {path:"scary",component:ScaryComponent},
    {path:"drama",component:DramaComponent},
    {path:"suspense",component:SuspenseComponent},
    {path:"animated",component:AnimatedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
