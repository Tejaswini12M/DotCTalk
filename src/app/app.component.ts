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
    'icon': "send",
    "path": "['/mail']"
  }, {
    'icon': "delete",
    "path": "['/mail']"
  }];
  activeLink = this.links[0];

  options = [{
    'icon': "mail_outline",
    'label': "Mail"
  }, {
    'icon': "chat_bubble_outline",
    'label': "Chat"
  }, {
    'icon': "assignment",
    'label': "Agendas"
  }, {
    'icon': "note_add",
    'label': "Notes"
  }, {
    'icon': "today",
    'label': "Reminders"
  }];

  public showInfo(item) {
    console.log(item)
  }
}
