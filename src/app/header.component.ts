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
      text-align:center;
		}
		#shop{
		  height: 150px;
      left:48%;  

    }
    #login{
      position:fixed;
      color:black;
      top: 10px;
      right: 160px;
      align: left;
    }
    #login:hover{
      color: white;
    }

  `
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
