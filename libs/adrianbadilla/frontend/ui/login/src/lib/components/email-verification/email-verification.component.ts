import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { provideComponentStore } from '@ngrx/component-store';
import { firebaseAuthHelper } from '@classes/firebaseAuthHelper';
import { EmailVerificationStore } from './email-verification.store';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NavbarComponent } from '@adrianbadilla/shared/components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.scss'],
  selector: 'adrianbadilla-email-verification',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    NavbarComponent,
    RouterModule,
    FontAwesomeModule
  ],
  providers: [provideComponentStore(EmailVerificationStore)],
})
export class EmailVerificationComponent extends firebaseAuthHelper {
  emailVerificationStore = inject(EmailVerificationStore);
}