import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    FormComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    FormComponent,
    CardComponent
  ]
})
export class LayoutModule { }
