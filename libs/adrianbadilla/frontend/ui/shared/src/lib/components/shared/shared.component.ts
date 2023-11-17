import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'adrianbadilla-shared',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedComponent {}
