import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MODULES } from '@adrianbadilla/shared/exports/export-modules';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { NothingOr } from '@adrianbadilla/shared/types/types';

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
