import { CommonModule } from '@angular/common';
import { passResetStore } from './pass-reset.store';
import { Component, inject, Input } from '@angular/core';
import { BaseComponent } from '@adrianbadilla/shared/classes/base-component';
import { MODULES } from '@adrianbadilla/shared/exports/export-modules';
import { COMPONENTS } from '@adrianbadilla/shared/exports/export-components';

@Component({
  selector: 'adrianbadilla-pass-reset',
  templateUrl: './pass-reset.component.html',
  styleUrls: ['./pass-reset.component.scss'],
  standalone: true,
  imports: [CommonModule, MODULES, COMPONENTS],
  providers: [passResetStore],
})
export class PassResetComponent extends BaseComponent {
  @Input()
  public user!: string;

  passResetStore = inject(passResetStore);
}
