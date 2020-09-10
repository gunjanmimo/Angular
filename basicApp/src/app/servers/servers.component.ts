import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  //styleUrls: ['./servers.component.css']

  //! inline styling 
  styles: ['h1{color:red;}']
})
export class ServersComponent implements OnInit {
  allowNewServer = false
  serverCreationStatus = "no server is running"
  serverNo = 0
  serverName = "test server"
  isServerCreated = false
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }
  updateStatus() {
    this.isServerCreated = true
    this.serverNo += 1
    this.serverCreationStatus = this.serverName + " server is running"
  }
  onUpdateServerName(event: any) {
    this.serverName = event.target.value

  }

}
