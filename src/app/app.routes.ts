import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'order-control',
        pathMatch: 'full'
    },

    {
        path: 'order-control',
        loadComponent: () =>
            import('./pages/counter-output/counter-output.component').then(m => m.CounterOutputComponent)
    }
];
