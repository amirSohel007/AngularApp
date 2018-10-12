import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {


  colors = [
    'red',
    'black',
    'orange',
    'yellow'
  ]

  dummyData = [

    {
      'Name': 'Vishal',
      'Age' : '23',
      'Height' : '5.6 inch',
      'Color' : 'Fair',
      'Weight': '52Kg'
     },

     {
      'Name': 'Amir',
      'Age' : '21',
      'Height' : '5.8 inch',
      'Color' : 'Fair',
      'Weight': '70Kg'
     },

     {
      'Name': 'Vicky',
      'Age' : '28',
      'Height' : '5.5 inch',
      'Color' : 'Fair',
      'Weight': '51Kg'
     }


  ]



  constructor() { }

  ngOnInit() {
  }



  

}
