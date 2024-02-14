import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { ProfileComponent } from './page/profile/profile.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DatapostedComponent } from './components/dataposted/dataposted.component';
import { ProfilePublicationComponent } from './components/profile-publication/profile-publication.component';
import { ProfileAProposComponent } from './components/profile-a-propos/profile-a-propos.component';
import { ProfileReelsComponent } from './components/profile-reels/profile-reels.component';
import { ProfilePhotosComponent } from './components/profile-photos/profile-photos.component';
import { LoginSignInComponent } from './components/login-sign-in/login-sign-in.component';
import { LoginSignUpComponent } from './components/login-sign-up/login-sign-up.component';

const routes: Routes = [
//  {path:'',redirectTo:"/account",pathMatch:'full'},
  { 
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: DatapostedComponent },
      {
        path: 'profile',
        component: ProfileComponent,
        children: [
          { path: '', component: ProfilePublicationComponent },
          { path: 'a-propos', component: ProfileAProposComponent },
          { path: 'reels', component: ProfileReelsComponent },
          { path: 'photos', component: ProfilePhotosComponent },
        ],
      },
      // { path: 'message', component: MessageComponent },
    ],
  },
  {
    path: 'account',
    component: LoginComponent,
    children: [
      { path: '', component: LoginSignInComponent },
      { path: 'sign-up', component: LoginSignUpComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
