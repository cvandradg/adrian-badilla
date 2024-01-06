import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const dashboardRoutes: Route[] = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@adrianbadilla/client').then((r) => r.routes),
      },
    ],
  },
];
