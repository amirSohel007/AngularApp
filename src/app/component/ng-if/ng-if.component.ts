import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  switch: any = false;
  //bulbOn = true;
  bulbOff = false;

  constructor() { }

  ngOnInit() {
  }

  bulb() {

    this.switch == false ? this.switch = true : this.switch = false;
  }

}
