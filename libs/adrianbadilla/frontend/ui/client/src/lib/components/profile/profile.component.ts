import { COMPONENTS } from '@adrianbadilla/shared/exports/export-components';
import { MODULES } from '@adrianbadilla/shared/exports/export-modules';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'adrianbadilla-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: true,
  imports: [CommonModule, COMPONENTS, MODULES],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {}
