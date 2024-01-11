import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from '@adrianbadilla/shared/exports/export-components';

@Component({
  selector: 'adrianbadilla-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
  standalone: true,
  imports: [CommonModule,  COMPONENTS],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoodComponent {}
