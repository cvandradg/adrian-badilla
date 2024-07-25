import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MODULES } from '@adrianbadilla/shared/exports/export-modules';

@Component({
  standalone: true,
  selector: 'adrianbadilla-hero',
  styleUrl: './hero.component.scss',
  templateUrl: './hero.component.html',
  imports: [CommonModule, NgOptimizedImage, MODULES],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {}
