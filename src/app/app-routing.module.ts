import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculatorComponent } from './calculator/calculator.component';
import { CrudComponent } from './crud/crud.component';
import { DirectivedemoComponent } from './directivedemo/directivedemo.component';
import { LeftComponent } from './left/left.component';
import { LoginComponent } from './login/login.component';
import { RightComponent } from './right/right.component';
import { TdformComponent } from './tdform/tdform.component';


const routes: Routes = [
  {
    path: "crud",
    component: CrudComponent
  },
  {
    path: "tdform",
    component: TdformComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "directive",
    component: DirectivedemoComponent
  },
  {
    path: "calculator",
    component: CalculatorComponent
  },
  {
    path: "left",
    component: LeftComponent
  },
  {
    path: "right",
    component: RightComponent
  },
  {
    path: "right/:uname",
    component: RightComponent
  },
  {
    path: "right/:uname/:city",
    component: RightComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
