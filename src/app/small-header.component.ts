import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'small-header',
  templateUrl: './small-header.component.html',
  styles: [`
    .header{
      height:5rem;
      background-color: #2C3A45;
    }
    .icon{
      height:inherit;
      float: left;
      width:5rem;

    }

    `]
})
export class SmallHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
