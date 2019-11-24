import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFeedComponent } from './user-feed/user-feed.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FlexLayoutModule } from '@angular/flex-layout';


const Component = [
  UserFeedComponent,
  UserCardComponent,
  UserPageComponent,
  UserFormComponent
]

@NgModule({
  declarations: [
    Component
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [
    Component
  ]
})
export class UserModule { }
