import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName = ""
  newServerContent = ""
  serverElements
  constructor() { }

  ngOnInit(): void {
  }
  onAddServer() {
    this.serverElements.push({
      type: "Server",
      name: this.newServerName,
      content: this.newServerContent
    })
  }
  onAddBlueprint() {
    this.serverElements.push({
      type: "blurprint",
      name: this.newServerName,
      content: this.newServerContent
    })
  }
}
