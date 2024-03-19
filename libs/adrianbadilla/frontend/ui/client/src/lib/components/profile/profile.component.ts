import { BaseComponent } from '@adrianbadilla/shared/classes/base-component';
import { COMPONENTS } from '@adrianbadilla/shared/exports/export-components';
import { MODULES } from '@adrianbadilla/shared/exports/export-modules';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'adrianbadilla-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: true,
  imports: [CommonModule, COMPONENTS, MODULES],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent extends BaseComponent {

  profileInputForm = this.formBuilder.group({
    age: ['', Validators.required],
    name: ['',Validators.required],
    lastnames: ['',Validators.required],
  });

}
