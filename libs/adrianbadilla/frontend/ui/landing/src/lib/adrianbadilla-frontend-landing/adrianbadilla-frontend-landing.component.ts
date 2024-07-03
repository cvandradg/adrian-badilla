import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'adrianbadilla-adrianbadilla-frontend-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './adrianbadilla-frontend-landing.component.html',
  styleUrl: './adrianbadilla-frontend-landing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdrianbadillaFrontendLandingComponent {}
