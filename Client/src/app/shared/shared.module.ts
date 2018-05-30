import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from "../material.module";
import {FormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {TextMaskModule} from "angular2-text-mask";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    NgbModule,
    TextMaskModule

  ],
  exports: [
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    NgbModule,
    TextMaskModule
  ],
  declarations: []
})
export class SharedModule {
}
