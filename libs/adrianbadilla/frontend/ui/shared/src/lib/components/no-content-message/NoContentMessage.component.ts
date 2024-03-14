import { MODULES } from '../../exports/export-modules';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { faDumbbell } from '@fortawesome/pro-duotone-svg-icons';


@Component({
  standalone: true,
  imports: [MODULES],
  selector: 'adrianbadilla-no-content-message',
  templateUrl: './NoContentMessage.component.html',
  styleUrl: './NoContentMessage.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class NoContentMessageComponent {

@Input() message: string = '¡Estamos esculpiendo algo genial para ti!'


  faDumbbell = faDumbbell;


}


