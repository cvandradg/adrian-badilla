import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MODULES } from '@adrianbadilla/shared/exports/export-modules';

@Component({
  selector: 'adrianbadilla-trainer-info',
  standalone: true,
  imports: [CommonModule, MODULES],
  templateUrl: './trainer-info.component.html',
  styleUrl: './trainer-info.component.scss',
})
export class TrainerInfoComponent {}
