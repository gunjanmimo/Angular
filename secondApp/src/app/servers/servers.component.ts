import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],

})
export class ServersComponent implements OnInit {
  serverName = ""
  constructor() { }
  serverCreated = false

  servers = ["test server", "test server 2"]
  ngOnInit(): void {
  }
  updateServer() {
    this.serverCreated = true
    this.servers.push(this.serverName)
    this.serverName = this.serverName + " server created"
  }
  dataInput(event: any) {
    this.serverName = event.target.value
  }


}
