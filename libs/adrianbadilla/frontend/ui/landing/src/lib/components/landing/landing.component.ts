import { HeroComponent } from '../hero/hero.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ProductsComponent } from '../products/products.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MODULES } from '@adrianbadilla/shared/exports/export-modules';
import { TrainerInfoComponent } from '../trainer-info/trainer-info.component';

@Component({
  selector: 'adrianbadilla-landing',
  styleUrl: './landing.component.scss',
  templateUrl: './landing.component.html',
  standalone: true,
  imports: [
    MODULES,
    CommonModule,
    HeroComponent,
    FooterComponent,
    NgOptimizedImage,
    ProductsComponent,
    TrainerInfoComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent {}
