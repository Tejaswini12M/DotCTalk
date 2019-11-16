import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingPageComponent } from './features/settings/setting-page/setting-page.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'setting', component: SettingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RouthingComponents = [AppComponent, SettingPageComponent];
