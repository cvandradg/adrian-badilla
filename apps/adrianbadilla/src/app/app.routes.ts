import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('@adrianbadilla/app').then((r) => r.appRoutes),
  },
];
