import { CommonModule } from '@angular/common';
import { MODULES } from '../../exports/export-modules';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  standalone: true,
  selector: 'adrianbadilla-tertiary-animated-button',
  templateUrl: './tertiary-animated-button.component.html',
  styleUrls: ['./tertiary-animated-button.component.scss'],
  imports: [CommonModule, MODULES],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TertiaryAnimatedButtonComponent {
  @Output() submitEvent = new EventEmitter<never>();

  @Input() small: boolean = false;
  @Input() icon: IconProp = ['fas', 'user'];
  @Input() buttonText: string = 'Some Small Text';

  onSubmit() {
    this.submitEvent.emit();
  }
}
