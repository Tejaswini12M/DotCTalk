import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  options = [{
    'icon': "email-outline",
    'label': "Mail"
  }, {
    'icon': "chat-outline",
    'label': "Chat"
  }, {
    'icon': "clipboard-account-outline",
    'label': "Agendas"
  }, {
    'icon': "pin-outline",
    'label': "Notes"
  }, {
    'icon': "timetable",
    'label': "Reminders"
  }];

}
