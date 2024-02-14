import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { HomeComponent } from './page/home/home.component';
import { ProfileComponent } from './page/profile/profile.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RightsideComponent } from './components/rightside/rightside.component';
import { DatapostedComponent } from './components/dataposted/dataposted.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfilePublicationComponent } from './components/profile-publication/profile-publication.component';
import { ProfileAProposComponent } from './components/profile-a-propos/profile-a-propos.component';
import { ProfileReelsComponent } from './components/profile-reels/profile-reels.component';
import { ProfilePhotosComponent } from './components/profile-photos/profile-photos.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginSignInComponent } from './components/login-sign-in/login-sign-in.component';
import { LoginSignUpComponent } from './components/login-sign-up/login-sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    SidebarComponent,
    RightsideComponent,
    DatapostedComponent,
    CreatePostComponent,
    PostCardComponent,
    ProfilePublicationComponent,
    ProfileAProposComponent,
    ProfileReelsComponent,
    ProfilePhotosComponent,
    UpdateUserComponent,
    LoginSignInComponent,
    LoginSignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
