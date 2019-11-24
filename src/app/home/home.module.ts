import { NgModule } from '@angular/core';
import { GroupModule } from './group/group.module';
import { MessageModule } from './message/message.module';
import { NotificationModule } from './notification/notification.module';
import { UserModule } from './user/user.module';
import { MailModule } from './mail/mail.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../share/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

const Module = [
  GroupModule,
  MessageModule,
  NotificationModule,
  UserModule,
  MailModule,
  MaterialModule,
  FlexLayoutModule
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    Module,
  ],
  exports: [
    Module,
  ]
})
export class HomeModule { }
