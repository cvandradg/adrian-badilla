import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'shared',
    loadChildren: () =>
      import('@adrianbadilla/shared').then((m) => m.sharedRoutes),
  },
  {
    path: 'app',
    loadChildren: () => import('@adrianbadilla/app').then((m) => m.appRoutes),
  },
];
