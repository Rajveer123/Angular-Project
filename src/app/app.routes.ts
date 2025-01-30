import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SamplepagesComponent } from './samplepages/samplepages.component';
import { DemopagesComponent } from './demopages/demopages.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ExamplepagesComponent } from './examplepages/examplepages.component';

export const routes: Routes = [{
    path: 'demopages',
    component: DemopagesComponent,
},
{
    path: 'examplepages',
    component : ExamplepagesComponent,
},
{
    path: 'samplepages',
    component: SamplepagesComponent,
},
{
    path: 'login',
    component: LoginComponent,
}, 
{
    path: 'profile',
    component: ProfileComponent,
},
{
    path: 'about',
    component: AboutComponent,
}, 
 {
    path: 'contactus',
    component: ContactusComponent,
}];
