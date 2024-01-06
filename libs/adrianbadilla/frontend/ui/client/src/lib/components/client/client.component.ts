import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MODULES } from '@adrianbadilla/shared/exports/export-modules';

@Component({
  selector: 'adrianbadilla-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MODULES],
})
export class ClientComponent {}
