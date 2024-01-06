import { NothingOr } from '../../types/general-types';
import { MODULES } from '../../exports/export-modules';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'adrianbadilla-status-message',
  templateUrl: './status-message.component.html',
  styleUrls: ['./status-message.component.scss'],
  imports: [MODULES],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusMessageComponent {
  @Input() icon: IconProp = ['fas', 'user'];
  @Input() display: NothingOr<boolean> = false;
  @Input() message: NothingOr<string> = 'Some Text';
  @Input() type: 'success' | 'error' | 'warning' | 'info' = 'error';
}
