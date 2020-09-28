import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { SharedModule } from './modules/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import {employeeReducer, employeeFeatureKey} from './store/reducer';
import { EffectsModule } from '@ngrx/effects';
import {EmployeeEffects} from './store/effetc';
import {HttpClientModule} from '@angular/common/http';
import {EmployerManagerModule} from './modules/employer-manager/employer-manager.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    EmployerManagerModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    StoreModule.forRoot({ [employeeFeatureKey]: employeeReducer }, {}),
    EffectsModule.forRoot([EmployeeEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
