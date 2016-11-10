import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'ad-sidebar',
  template: `
  		<img src ="./assets/img/arrow1-icon.png" class="sidebar-arrow" *ngIf="!show" (click)="show=!show"/>
		
		<div class="sidebar" *ngIf="show">
			<ul class="sidebar-menu" >
				<li><h4>Menu</h4></li>
				<li  *ngFor="let icon of icons">
					<button (click)="onClick(icon.name)"><img class="icons" src="{{icon.src}}"  alt={{icon.name}} /></button>
				</li>
				<div><img src ="./assets/img/arrow1-icon.png" class="sidebar-arrow2" (click)="show=!show"/></div>
			</ul>

		</div>
		`,
		styleUrls: ['./sidebar.component.css'],
		outputs:['sidebarChanged']
})
export class SidebarComponent{
	show=false;
	public icons = [
		{ src: "./assets/img/hat-icon.png", name:"hats"},
		{ src: "./assets/img/shirt-icon.png", name:"shirts"},
		{ src: "./assets/img/pants-icon.png", name:"pants"},
		{ src: "./assets/img/shoes-icon.png", name:"shoes"},
		{ src: "./assets/img/bag-icon.png", name:"bag"}
	];

	sidebarChanged = new EventEmitter<string>();
	onClick(value:string){
		
		console.log(value);
		this.sidebarChanged.emit(value);
	}
}
