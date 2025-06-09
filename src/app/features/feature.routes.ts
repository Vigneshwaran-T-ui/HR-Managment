import { Routes } from '@angular/router';
import { FeatureContainer } from './components/feature-container/feature-container';
import { Dashboard } from './components/dashboard/dashboard';
import { Employees } from './components/employees/employees/employees';
import { Settings } from './components/settings/settings';
import { Notifications } from './components/notifications/notifications';
import { Announcements } from './components/announcements/announcements';
import { MyLeaves } from './components/my-leaves/my-leaves/my-leaves';
import { LeaveSummary } from './components/my-leaves/leave-summary/leave-summary';
import { LeaveHistory } from './components/my-leaves/leave-history/leave-history';
import { ApplyLeaveComponent } from './components/my-leaves/apply-leave/apply-leave.component';

export const FeatureRoutes: Routes = [
  {
    path: 'management',
    component: FeatureContainer,
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'employees', component: Employees },
      { path: 'settings', component: Settings },
      { path: 'notifications', component: Notifications },
      { path: 'announcements', component: Announcements },
      {
        path: 'leaves',
        component: MyLeaves,
        children: [
          {
            path: 'apply-leave',
            component: ApplyLeaveComponent,
          },
          {
            path: 'my-leaves',
            component: LeaveSummary,
          },
          {
            path: 'history',
            component: LeaveHistory,
          },
        ],
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'management',
    pathMatch: 'full',
  },
];
