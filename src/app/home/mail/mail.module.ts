import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailCardComponent } from './mail-card/mail-card.component';
import { MailPageComponent } from './mail-page/mail-page.component';
import { MailFormComponent } from './mail-form/mail-form.component';
import { MailFeedComponent } from './mail-feed/mail-feed.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/share/material.module';

const Components = [
  MailCardComponent,
  MailPageComponent,
  MailFormComponent,
  MailFeedComponent
];

@NgModule({
  declarations: [Components],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [Components],
  bootstrap: [],
})
export class MailModule { }
