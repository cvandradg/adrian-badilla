import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TertiaryButton } from '@adrianbadilla/shared/types/types';
import { MODULES } from '@adrianbadilla/shared/exports/export-modules';
import { SERVICES } from '@adrianbadilla/shared/exports/export-services';
import { COMPONENTS } from '@adrianbadilla/shared/exports/export-components';
import { BaseComponent } from '@adrianbadilla/shared/classes/base-component';

@Component({
  standalone: true,
  selector: 'adrianbadilla-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MODULES, COMPONENTS],
  providers: [SERVICES],
})
export class DashboardComponent extends BaseComponent { 
  navItems: TertiaryButton[] = [
    { text: "Perfil", icon: ['fas', 'user'], path: "perfil" },
    { text: "Dietas", icon: ['fas', 'salad'], path: "dietas", },
    { text: "Comida", icon: ['fas', 'pot-food'], path: "comida" },
    { text: "Rutinas", icon: ['fas', 'dumbbell'], path: "rutinas" },
    { text: "Suplementos", icon: ['fad', 'jar'], path: "suplementos" },
    { text: "Vestimenta", icon: ['fas', 'shirt'], path: "vestimenta" },
    { text: "Utilidades", icon: ['fas', 'telescope'], path: "utilidades" },
    { text: "Contáctanos", icon: ['fas', 'comments-question-check'], path: "contactenos" }
  ]
}
