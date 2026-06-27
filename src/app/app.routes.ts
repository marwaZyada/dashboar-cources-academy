import { Routes } from '@angular/router';
import { Layout } from '@core/layout/layout';
import { Dashboard } from '@features/dashboard/dashboard';
import { Home } from '@features/home/pages/home/home';

export const routes: Routes = [
//  {
//     path: 'login',
//     component: LoginComponent
//   },

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
  
