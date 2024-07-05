import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from '@adrianbadilla/shared/exports/export-components';
import { MODULES } from '@adrianbadilla/shared/exports/export-modules';

@Component({
  selector: 'adrianbadilla-landing',
  standalone: true,
  imports: [CommonModule, MODULES],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent {}
