import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingPageComponent } from './setting-page/setting-page.component';

@NgModule({
  declarations: [
    SettingPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SettingPageComponent
  ]
})
export class SettingsModule { }
