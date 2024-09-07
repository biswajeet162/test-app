import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AaaComponent } from './aaa/aaa.component';
import { BbbComponent } from './bbb/bbb.component';
import { CccComponent } from './ccc/ccc.component';



@NgModule({
  declarations: [
    AaaComponent,
    BbbComponent,
    CccComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AaModule { }
