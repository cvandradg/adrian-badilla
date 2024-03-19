import { COMPONENTS } from '@adrianbadilla/shared/exports/export-components';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'adrianbadilla-rutines',
  templateUrl: './rutines.component.html',
  styleUrls: ['./rutines.component.scss'],
  standalone: true,
  imports: [CommonModule, COMPONENTS],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RutinesComponent {}
