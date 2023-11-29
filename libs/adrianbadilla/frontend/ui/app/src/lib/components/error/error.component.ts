import { Component, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { RouterTestingModule } from "@angular/router/testing";
import { SecondaryAnimatedButtonComponent } from '@adrianbadilla/shared/components/secondary-animated-button/secondary-animated-button.component';

@Component({
  standalone: true,
  selector: 'adrianbadilla-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
  imports: [CommonModule, SecondaryAnimatedButtonComponent, RouterTestingModule],
})
export class ErrorComponent {
  location = inject(Location);
}
