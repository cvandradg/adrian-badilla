import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MODULES } from '@adrianbadilla/shared/exports/export-modules';

@Component({
  standalone: true,
  selector: 'adrianbadilla-first-section',
  styleUrl: './first-section.component.scss',
  templateUrl: './first-section.component.html',
  imports: [CommonModule, MODULES],
})
export class FirstSectionComponent {}
