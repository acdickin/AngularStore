import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ad-header',
  templateUrl: './header.component.html',
  styles: [`
		#cart{
			position: fixed;
      opacity:0.50;
    	height: 100px;
   	  width: 100px;
    	top: 18px;
    	right: 18px;
      background-color:#445562;
      border-radius: 10px;  
		}
    #cart:hover{
      opacity:1;
      -webkit-transition: all .2s ease-in-out;
    }
    #header{
		  background-color:#2C3A45;
			text-shadow: 0 0 5px white;	
			text-align: center;
			color: white;
			margin:0;
			height:150px;
		}
		#shop{
		  height: 150px;
      left:48%;
      fixed:
    }
  `
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
