import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailCardComponent } from './mail-card/mail-card.component';
import { MailFeedComponent } from './mail-feed/mail-feed.component';
import { MailPageComponent } from './mail-page/mail-page.component';
import { MailFormComponent } from './mail-form/mail-form.component';

const Components = [MailCardComponent, MailPageComponent, MailFormComponent]

@NgModule({
  declarations: [Components],
  imports: [
    CommonModule
  ],
  exports: [Components],
  bootstrap: [MailFeedComponent],
})
export class MailModule { }
