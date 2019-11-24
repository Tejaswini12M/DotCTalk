import { Route } from '@angular/router';
import { HomeComponent } from './home.component';
import { MailFeedComponent } from './mail/mail-feed/mail-feed.component';
import { UserFeedComponent } from './user/user-feed/user-feed.component';


export const HomeRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'mail', component: MailFeedComponent },
      { path: 'user', component: UserFeedComponent },
    ],
  }
];


