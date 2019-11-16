import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GroupModule } from '../features/group/group.module';
import { MessageModule } from '../features/message/message.module';
import { NotificationModule } from '../features/notification/notification.module';
import { UserModule } from '../features/user/user.module';
import { MaterialModule } from './material.module';
import { MailModule } from '../mail/mail.module';


@NgModule({
  declarations: [],
  imports: [
    MaterialModule,
    CommonModule,
    FlexLayoutModule,
    GroupModule,
    MessageModule,
    NotificationModule,
    UserModule,
    MailModule,
  ],
  exports: [
    MaterialModule,
    CommonModule,
    FlexLayoutModule,
    GroupModule,
    MessageModule,
    NotificationModule,
    UserModule,
    MailModule,
  ]
})
export class ShareModule { }
