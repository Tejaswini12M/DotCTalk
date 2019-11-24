import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationFeedComponent } from './notification-feed/notification-feed.component';
import { NotificationFormComponent } from './notification-form/notification-form.component';
import { NotificationCardComponent } from './notification-card/notification-card.component';
import { NotificationPageComponent } from './notification-page/notification-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';

const Component = [
  NotificationFeedComponent,
  NotificationFormComponent,
  NotificationCardComponent,
  NotificationPageComponent];

@NgModule({
  declarations: [Component],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [Component]
})
export class NotificationModule { }
