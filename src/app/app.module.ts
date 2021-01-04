import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DirectivedemoComponent } from './directivedemo/directivedemo.component';
import { LoginComponent } from './login/login.component';
import { TdformComponent } from './tdform/tdform.component';
import { CrudComponent } from './crud/crud.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftComponent,
    RightComponent,
    CalculatorComponent,
    DirectivedemoComponent,
    LoginComponent,
    TdformComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
