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
			text-shadow: 0 0 5px white;	
			text-align: center;
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
