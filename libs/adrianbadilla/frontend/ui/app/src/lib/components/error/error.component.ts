import { Component, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { SecondaryAnimatedButtonComponent } from '@adrianbadilla/shared/components/secondary-animated-button/secondary-animated-button.component';

@Component({
  standalone: true,
  selector: 'adrianbadilla-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
  imports: [
    CommonModule,
    SecondaryAnimatedButtonComponent,
  ],
})
export class ErrorComponent {
  location = inject(Location);
}
