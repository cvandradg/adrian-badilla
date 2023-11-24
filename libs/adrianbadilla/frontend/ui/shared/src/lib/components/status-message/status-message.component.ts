import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MODULES } from '@adrianbadilla/shared/exports/export-modules';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  standalone: true,
  selector: 'adrianbadilla-status-message',
  templateUrl: './status-message.component.html',
  styleUrls: ['./status-message.component.scss'],
  imports: [MODULES],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusMessageComponent {
  @Input() display = true;
  @Input() message = 'Some Text';
  @Input() icon: IconProp = ['fas', 'user'];
  @Input() type: 'success' | 'error' | 'warning' | 'info' = 'error';
}
