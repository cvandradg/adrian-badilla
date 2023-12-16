import { canActivate } from '@angular/fire/auth-guard';
import { ErrorComponent } from './components/error/error.component';
import { redirectUnauthorized } from '@adrianbadilla/shared/services/helperFunctions.service';

export const children = [
    {
        path: 'login',
        loadChildren: () =>
            import('@adrianbadilla/login').then((r) => r.loginRoutes),
    },
    {
        path: '',
        pathMatch: 'prefix',
        ...canActivate(redirectUnauthorized),
        loadChildren: () =>
            import('@adrianbadilla/dashboard').then((r) => r.dashboardRoutes),
    },
    {
        path: '**',
        component: ErrorComponent,
        pathMatch: 'full',
    },
]