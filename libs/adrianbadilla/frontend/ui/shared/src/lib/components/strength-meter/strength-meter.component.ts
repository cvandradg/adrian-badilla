import {
  Component,
  Input,
  Output,
  OnChanges,
  EventEmitter,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'adrianbadilla-strength-meter',
  templateUrl: './strength-meter.component.html',
  styleUrls: ['./strength-meter.component.scss'],
  imports: [CommonModule],
})
export class StrengthMeterComponent implements OnChanges {
  @Input() password = '';
  @Output() enableButton = new EventEmitter<boolean>(false);

  result = '';
  symbols = /[$-/:-?{-~!"^_@`[\]]+/;
  lowerLetters = /[a-z]+/;
  upperLetters = /[A-Z]+/;
  numbers = /[0-9]+/;
  passLength = {
    test: (pass: string) => {
      return pass.length >= 5;
    },
  };

  validationFlags = [
    this.symbols,
    this.lowerLetters,
    this.upperLetters,
    this.numbers,
    this.passLength,
  ];

  ngOnChanges(changes: any): void {
    this.passStrengthMeter(changes?.password?.currentValue);
  }

  passStrengthMeter(
    pass: string
  ): 'vulnerable' | 'debil' | 'semisegura' | 'segura' | 'fuerte' {
    const result = this.validationFlags.filter((regexFlags: any) => {
      if (regexFlags.test(pass)) {
        return true;
      }

      return false;
    });

    if (result.length <= 1) {
      this.result = 'vulnerable';
      this.isButtonEnable(false);
      return 'vulnerable';
    }

    if (result.length <= 2) {
      this.result = 'debil';

      this.isButtonEnable(true);
      return 'debil';
    }

    if (result.length <= 3) {
      this.result = 'semisegura';

      this.isButtonEnable(true);
      return 'semisegura';
    }

    if (result.length <= 4) {
      this.result = 'segura';

      this.isButtonEnable(true);
      return 'segura';
    }

    this.isButtonEnable(true);
    this.result = 'fuerte';
    return 'fuerte';
  }

  isButtonEnable(isEnable: boolean): void {
    this.enableButton.emit(isEnable);
  }
}
