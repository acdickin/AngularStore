import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'large-header',
  templateUrl: './header.component.html',
  styles: [`
    .header{
      background-color:#2C3A45;
      text-align:center;
       height: 150px;
       overflow:hidden;
    }
    #cart{
			position: fixed;
      opacity:0.50;
    	height: 50px;
   	  width: 50px;
    	top: 18px;
    	right: 18px;
      background-color:#445562;
      border-radius: 10px;
		}
    #cart:hover{
      opacity:1;
      -webkit-transition: all .2s ease-in-out;
    }

		#shop{
      left:48%;
      height: inherit;

    }
    #login{
      position:fixed;
      color:black;
      top: 10px;
      right: 100px;
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
