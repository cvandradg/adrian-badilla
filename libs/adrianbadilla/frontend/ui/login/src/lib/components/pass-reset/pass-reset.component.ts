import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { passResetStore } from './pass-reset.store';
import { firebaseAuthHelper } from '@classes/firebaseAuthHelper';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'adrianbadilla-pass-reset',
  templateUrl: './pass-reset.component.html',
  styleUrls: ['./pass-reset.component.scss'],
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  providers: [passResetStore],
})
export class PassResetComponent extends firebaseAuthHelper {

  @Input()
  public user!: string;

  passResetStore = inject(passResetStore);
}
