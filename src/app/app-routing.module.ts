import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingPageComponent } from './features/settings/setting-page/setting-page.component';
import { AppComponent } from './app.component';
import { MailFeedComponent } from './mail/mail-feed/mail-feed.component';


const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'setting', component: SettingPageComponent },
  { path: 'mail', component: MailFeedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [AppComponent, SettingPageComponent, MailFeedComponent];
