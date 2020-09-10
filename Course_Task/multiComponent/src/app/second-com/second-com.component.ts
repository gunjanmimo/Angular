import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-com',
  templateUrl: './second-com.component.html',
  styleUrls: ['./second-com.component.css']
})
export class SecondComComponent implements OnInit {
  companyName = "gunjan paul"

  studentName = '';
  age = 0
  address = ""
  constructor() { }

  ngOnInit(): void {
  }
  updateData() {

  }
  onUpdateServer(event: any) {
    this.studentName = (<HTMLInputElement>event).target.value;
  }

}
