import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingPageComponent } from './features/settings/setting-page/setting-page.component';
import { AppComponent } from './app.component';
import { MailFeedComponent } from './mail/mail-feed/mail-feed.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'setting', component: SettingPageComponent },
  { path: 'mail', component: MailFeedComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [AppComponent, HomeComponent, SettingPageComponent, MailFeedComponent,];
