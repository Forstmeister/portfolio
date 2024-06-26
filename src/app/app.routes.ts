import { Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ImprintComponent } from './landingpage/imprint/imprint.component';
import { PrivacyPolicyComponent } from './landingpage/privacy-policy/privacy-policy.component';
import { MailinfoComponent } from './landingpage/mailinfo/mailinfo.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingpageComponent,
  },
  {
    path: 'imprint',
    component: ImprintComponent,
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
  },
  {
    path: 'success',
    component: MailinfoComponent,
  },
];
