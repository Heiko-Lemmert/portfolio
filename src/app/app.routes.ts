import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HomeComponent } from './home/home.component';
import { LegalLayoutComponent } from './layout/legal-layout/legal-layout.component';
import { ImprintComponent } from './legal/imprint/imprint.component';
import { PrivacyPoliceComponent } from './legal/privacy-police/privacy-police.component';

export const routes: Routes = [
    {
    path: '',
    component: MainLayoutComponent,
    children: [{ path: '', component: HomeComponent }],
  },
  {
    path: '',
    component: LegalLayoutComponent,
    children: [
      { path: 'imprint', component: ImprintComponent },
      { path: 'privacy-policy', component: PrivacyPoliceComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];
