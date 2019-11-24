import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupFeedComponent } from './group-feed/group-feed.component';
import { GroupCardComponent } from './group-card/group-card.component';
import { GroupPageComponent } from './group-page/group-page.component';
import { GroupFormComponent } from './group-form/group-form.component';
import { FlexLayoutModule } from '@angular/flex-layout';

const Component = [
  GroupFeedComponent,
  GroupCardComponent,
  GroupPageComponent,
  GroupFormComponent
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
export class GroupModule { }
