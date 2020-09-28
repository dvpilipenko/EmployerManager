import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import {MaterialModule} from '../material.module';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [ButtonComponent, SpinnerComponent],
  exports: [
    ButtonComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
