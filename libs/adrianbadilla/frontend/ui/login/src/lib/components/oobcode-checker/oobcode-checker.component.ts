import { CommonModule } from '@angular/common';
import { BaseComponent } from '@classes/base-component';
import { OobcodeCheckerStore } from './oobcode-checker.store';
import { provideComponentStore } from '@ngrx/component-store';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { COMPONENTS } from '@adrianbadilla/shared/exports/export-components';
import { MODULES } from '@adrianbadilla/shared/exports/export-modules';

@Component({
  selector: 'adrianbadilla-oobcode-checker',
  templateUrl: './oobcode-checker.component.html',
  styleUrls: ['./oobcode-checker.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FontAwesomeModule, MODULES, COMPONENTS],
  providers: [provideComponentStore(OobcodeCheckerStore)],
})
export class OobcodeCheckerComponent extends BaseComponent {
  oobCodeCheckerStore = inject(OobcodeCheckerStore);
}
