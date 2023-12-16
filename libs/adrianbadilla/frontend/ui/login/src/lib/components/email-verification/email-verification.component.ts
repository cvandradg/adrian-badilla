import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BaseComponent } from '@classes/base-component';
import { EmailVerificationStore } from './email-verification.store';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MODULES } from '@adrianbadilla/shared/exports/export-modules';
import { COMPONENTS } from '@adrianbadilla/shared/exports/export-components';
import { provideComponentStore } from '@ngrx/component-store';

@Component({
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.scss'],
  selector: 'adrianbadilla-email-verification',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule, MODULES, COMPONENTS],
  providers: [provideComponentStore(EmailVerificationStore)],
})
export class EmailVerificationComponent extends BaseComponent {
  emailVerificationStore = inject(EmailVerificationStore);
}
