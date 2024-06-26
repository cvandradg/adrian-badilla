import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LetDirective, PushPipe } from '@ngrx/component';

export const MODULES = [
  PushPipe,
  FormsModule,
  CommonModule,
  RouterModule,
  LetDirective,
  MatListModule,
  MatIconModule,
  DragDropModule,
  MatRadioModule,
  MatInputModule,
  MatChipsModule,
  MatSelectModule,
  MatDialogModule,
  MatButtonModule,
  MatToolbarModule,
  MatStepperModule,
  MatSidenavModule,
  FontAwesomeModule,
  MatCheckboxModule,
  MatFormFieldModule,
  ReactiveFormsModule,
  MatAutocompleteModule,
];
