import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-com',
  templateUrl: './second-com.component.html',
  styleUrls: ['./second-com.component.css']
})
export class SecondComComponent implements OnInit {
  companyName = "gunjan paul"

  stdentName: String = ""
  age: number
  address: string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
