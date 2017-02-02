import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ad-header',
  templateUrl: './header.component.html',
  styles: [`
		#cart{
			float: right;
    	height: 100px;
   	  width: 100px;
    	margin-top: 40px;
    	margin-right: 40px;
		}
		#header{
		  background-color:#445562;
			text-shadow: 0 0 5px white;	
			text-align: center;
			color: white;
			margin:0;
			height:200px;
		}
		#shop{
			float: center;
    	height: 200px;
   	 	margin-left:100px;
    }
  `
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
