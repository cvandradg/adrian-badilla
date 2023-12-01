import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MODULES } from '@adrianbadilla/shared/exports/export-modules';
import { COMPONENTS } from '@adrianbadilla/shared/exports/export-components';
import { SERVICES } from '@adrianbadilla/shared/exports/export-services';
import { TertiaryButton } from '@adrianbadilla/shared/types/types';
import { BaseComponent } from '@adrianbadilla/shared/classes/base-component';

@Component({
  standalone: true,
  selector: 'adrianbadilla-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MODULES, COMPONENTS],
  providers: [SERVICES],
})
export class DashboardComponent extends BaseComponent { 
  navItems: TertiaryButton[] = [
    { text: "Perfil", icon: ['fas', 'user'], path: "/dashboard/perfil" },
    { text: "Dietas", icon: ['fas', 'salad'], path: "/dashboard/dietas", },
    { text: "Comida", icon: ['fas', 'pot-food'], path: "/dashboard/comida" },
    { text: "Rutinas", icon: ['fas', 'dumbbell'], path: "/dashboard/rutinas" },
    { text: "Vestimenta", icon: ['fas', 'shirt'], path: "/dashboard/vestimenta" },
    { text: "Suplementos", icon: ['fad', 'jar'], path: "/dashboard/suplementos" },
    { text: "Utilidades", icon: ['fas', 'telescope'], path: "/dashboard/utilidades" },
    { text: "Contáctanos", icon: ['fas', 'comments-question-check'], path: "/dashboard/contactenos" }
  ]
}
