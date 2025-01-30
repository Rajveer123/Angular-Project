import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SamplepagesComponent } from './samplepages/samplepages.component';
import { DemopagesComponent } from './demopages/demopages.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ExamplepagesComponent } from './examplepages/examplepages.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [{
    //Defining Root Component Path
    path: '',
    component: HomeComponent,
 },
 {
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
},
{
   //Defining Wildcard Entry Component at the end of all routes defined.
   //It will open mentioned page when user accedently entered incorrect url to access sight
   path: '**',
   component: PageNotFoundComponent,
}
];
