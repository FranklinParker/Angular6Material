import {NgModule} from '@angular/core';
import {
  MatButtonModule, MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
  MatExpansionModule
} from '@angular/material';

@NgModule({
  imports: [
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatTabsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDialogModule,
    MatCardModule,
    MatExpansionModule
  ],
  exports: [
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatTabsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDialogModule,
    MatCardModule,
    MatExpansionModule

  ],
  declarations: []
})
export class MaterialModule {
}
