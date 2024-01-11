import { COMPONENTS } from '@adrianbadilla/shared/exports/export-components';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'adrianbadilla-contact-us',
  templateUrl: './contactUs.component.html',
  styleUrls: ['./contactUs.component.scss'],
  standalone: true,
  imports: [CommonModule, COMPONENTS],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactUsComponent {}
