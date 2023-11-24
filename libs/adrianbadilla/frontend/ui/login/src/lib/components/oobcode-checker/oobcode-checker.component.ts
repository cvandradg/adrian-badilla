import { CommonModule } from '@angular/common';
import { firebaseAuthHelper } from '@classes/firebaseAuthHelper';
import { OobcodeCheckerStore } from './oobcode-checker.store';
import { provideComponentStore } from '@ngrx/component-store';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { COMPONENTS } from '@adrianbadilla/shared/exports/export-components';

@Component({
  selector: 'adrianbadilla-oobcode-checker',
  templateUrl: './oobcode-checker.component.html',
  styleUrls: ['./oobcode-checker.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FontAwesomeModule, COMPONENTS],
  providers: [provideComponentStore(OobcodeCheckerStore)],
})
export class OobcodeCheckerComponent extends firebaseAuthHelper {
  oobCodeCheckerStore = inject(OobcodeCheckerStore);
}
