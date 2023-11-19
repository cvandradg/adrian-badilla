import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'app',
    loadChildren: () => import('@adrianbadilla/app').then((m) => m.appRoutes),
  },
];
