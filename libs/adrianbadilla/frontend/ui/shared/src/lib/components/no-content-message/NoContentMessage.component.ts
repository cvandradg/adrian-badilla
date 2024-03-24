import { CommonModule } from '@angular/common';
import { MODULES } from '../../exports/export-modules';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  standalone: true,
  imports: [CommonModule, MODULES],
  selector: 'adrianbadilla-no-content-message',
  templateUrl: './NoContentMessage.component.html',
  styleUrls: ['./NoContentMessage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoContentMessageComponent {
  @Input() message: string = '¡Estamos esculpiendo algo genial para ti!';
  @Input() icon: IconProp = ['fas', 'person-dolly-empty'];
  @Input() icon2: IconProp = ['fas', 'heart-pulse'];
}
