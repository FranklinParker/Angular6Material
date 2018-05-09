import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from "../material.module";
import {FormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    NgbModule
  ],
  exports: [
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    NgbModule
  ],
  declarations: []
})
export class SharedModule {
}
