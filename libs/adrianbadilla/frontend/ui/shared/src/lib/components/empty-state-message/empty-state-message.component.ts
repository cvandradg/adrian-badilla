import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'adrianbadilla-empty-state-message',
  templateUrl: './empty-state-message.component.html',
  styleUrl: './empty-state-message.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class EmptyStateMessageComponent { }

