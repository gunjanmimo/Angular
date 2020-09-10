import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverID: number = 42;
    serverStatu: String = "offline";


    getServerStatus() {
        return this.serverStatu
    }
}