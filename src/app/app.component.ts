import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DotcTalk';

  links = [{
    'icon': "inbox",
    "path": "['/mail']"
  }, {
    'icon': "email-send-outline",
    "path": "['/mail']"
  }, {
    'icon': "delete-empty-outline",
    "path": "['/mail']"
  }];
  activeLink = this.links[0];

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

  public showInfo(item) {
    console.log(item)
  }
}
