import { Route } from '@angular/router';
import { FoodComponent } from './components/food/food.component';
import { DietsComponent } from './components/diets/diets.component';
import { ClientComponent } from './components/client/client.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RutinesComponent } from './components/rutines/rutines.component';
import { ClothesComponent } from './components/clothes/clothes.component';
import { UtilitiesComponent } from './components/utilities/utilities.component';
import { ContactUsComponent } from './components/contact-us/contactUs.component';
import { SuplementsComponent } from './components/suplements/suplements.component';

export const routes: Route[] = [
  {
    path: '',
    component: ClientComponent,
    children: [
      { path: 'comida', component: FoodComponent},
      { path: 'dietas', component: DietsComponent },
      { path: 'perfil', component: ProfileComponent },
      { path: 'rutinas', component: RutinesComponent },
      { path: 'vestimenta', component: ClothesComponent },
      { path: 'utilidades', component: UtilitiesComponent },
      { path: 'contactenos', component: ContactUsComponent },
      { path: 'suplementos', component: SuplementsComponent },
    ]
  }
];
