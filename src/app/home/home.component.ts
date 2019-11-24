import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

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
    console.log(item);
  }

}
