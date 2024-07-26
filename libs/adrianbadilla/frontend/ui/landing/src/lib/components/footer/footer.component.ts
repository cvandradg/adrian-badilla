import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MODULES } from '@adrianbadilla/shared/exports/export-modules';

@Component({
  standalone: true,
  selector: 'adrianbadilla-footer',
  styleUrl: './footer.component.scss',
  templateUrl: './footer.component.html',
  imports: [CommonModule, MODULES],
})
export class FooterComponent {}
