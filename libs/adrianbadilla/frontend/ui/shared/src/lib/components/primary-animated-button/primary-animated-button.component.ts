import { CommonModule } from '@angular/common';
import { MODULES } from '../../exports/export-modules';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'adrianbadilla-primary-animated-button',
  templateUrl: './primary-animated-button.component.html',
  styleUrls: ['./primary-animated-button.component.scss'],
  imports: [CommonModule, MODULES],
})
export class PrimaryAnimatedButtonComponent {
  @Input() enable = false;
  @Input() loading = false;
  @Input() buttonText!: string;
  @Output() submitEvent = new EventEmitter<never>();

  onSubmit() {
    this.submitEvent.emit();
  }
}
