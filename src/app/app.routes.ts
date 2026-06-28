import { Routes } from '@angular/router';
import { Layout } from '@core/layout/layout';
import { Dashboard } from '@features/dashboard/dashboard';
import { Home } from '@features/home/pages/home/home';

export const routes: Routes = [
 {
    path: 'login',
    loadComponent: () =>
      import('./features/Authentication/pages/login/login')
      .then(c => c.Login)
  },

  {
    path: 'register',
    loadComponent: () =>
      import('./features/Authentication/pages/register/register')
      .then(c => c.Register)
  },

  {
    path: '',
    component: Layout,
    children: [

      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },

      {
        path: 'dashboard',
        component: Dashboard
      },

  {
    path: 'courses',
    loadChildren: () =>
      import('./features/course/courses.routes')
        .then(r => r.COURSES_ROUTES)
  },

  {
    path: '**',
    redirectTo: ''
  }
]
}
];
  
