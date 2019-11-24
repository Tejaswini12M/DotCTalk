import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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



  constructor() { }

  ngOnInit() {
  }

  activeLink = this.links[0];

  public showInfo(item) {
    console.log(item);
  }

}
