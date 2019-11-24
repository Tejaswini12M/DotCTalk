import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  options = [{
    'icon': "email-outline",
    'label': "Mail",
    'routerLink': '/mail'
  }, {
    'icon': "chat-outline",
    'label': "Chat",
    'routerLink': '/user'
  }, {
    'icon': "clipboard-account-outline",
    'label': "Agendas",
    'routerLink': '/mail'
  }, {
    'icon': "pin-outline",
    'label': "Notes",
    'routerLink': '/mail'
  }, {
    'icon': "timetable",
    'label': "Reminders",
    'routerLink': '/mail'
  }];

}
