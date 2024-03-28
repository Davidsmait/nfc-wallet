import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'wallet',
        loadComponent: () =>
          import('../wallet/wallet.page').then((m) => m.WalletPage),
      },

    ],
  },
  {
    path: '',
    redirectTo: '/tabs/wallet',
    pathMatch: 'full',
  },
];
