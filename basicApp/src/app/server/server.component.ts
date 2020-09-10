import { Component } from '@angular/core';

@Component({
    selector: "app-server",
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})

export class ServerComponent {
    id: String = "34A2D"; status: String = "OFFLINE";
    getWaitedLoad() {
        return "40 Latency"
    }
}