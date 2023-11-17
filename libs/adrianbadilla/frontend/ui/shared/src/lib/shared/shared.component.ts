import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'adrianbadilla-shared',
  standalone: true,
  imports: [CommonModule],
  template: `<p>shared works!</p>`,
  styleUrls: ['./shared.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedComponent {}
