import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageFeedComponent } from './message-feed/message-feed.component';
import { MessageFormComponent } from './message-form/message-form.component';
import { MessagePageComponent } from './message-page/message-page.component';
import { MessageCardComponent } from './message-card/message-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';

const Component = [
  MessageFeedComponent,
  MessageFormComponent,
  MessagePageComponent,
  MessageCardComponent
]

@NgModule({
  declarations: [Component],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [Component]
})
export class MessageModule { }
