import { Component } from '@angular/core';

@Component({
    selector: "app-server",
    templateUrl: './server.component.html',
    styles: [`
    .onLine{
        color: White
    }
    `]
})

export class ServerComponent {
    id: String = "34A2D"; status: String = "OFFLINE";
    constructor() {
        this.status = Math.random() > 0.5 ? "online" : "offline"
    }
    getWaitedLoad() {
        return "40 Latency"
    }
    getColor() {
        return this.status === "online" ? "green" : "red";
    }
}