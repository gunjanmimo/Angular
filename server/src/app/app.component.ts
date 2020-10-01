import { ServerElementComponent } from './server-element/server-element.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'server';
  serverElements = [{ type: "server", name: "test server", content: "just a server" }]
}
