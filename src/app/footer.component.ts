import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ad-footer',
  templateUrl: './footer.component.html',
  styles: [`
		#footer{
			position:fixed;
			bottom:0;
			left:0;
			width:100%;
		  background-color:#2C3A45;
			padding-top:20px;	
			padding-left:40px;
			text-align: left;
			color: white;
			height:50px;
		}
  `]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
