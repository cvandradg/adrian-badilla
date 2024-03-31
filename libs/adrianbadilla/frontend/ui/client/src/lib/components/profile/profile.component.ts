import { BaseComponent } from '@adrianbadilla/shared/classes/base-component';
import { COMPONENTS } from '@adrianbadilla/shared/exports/export-components';
import { MODULES } from '@adrianbadilla/shared/exports/export-modules';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Validators } from '@angular/forms';
import { firestoreDatabaseService } from "@adrianbadilla/shared/services/firestore-database.service";
import { from } from 'rxjs';

@Component({
  selector: 'adrianbadilla-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: true,
  imports: [CommonModule, COMPONENTS, MODULES],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent extends BaseComponent  {
  firestore = inject(firestoreDatabaseService)
  
  profileInputForm = this.formBuilder.group({
    age: ['', Validators.required],
    name: ['', Validators.required],
    weight: ['', Validators.required],
    lastnames: ['', Validators.required],
    height: ['', Validators.required],
  });
}
