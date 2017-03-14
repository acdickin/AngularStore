import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'ad-sidebar',
  template: `
  
    <img src ="../assets/img/icons/filter.png" class="sidebar-icon" *ngIf="!show" (click)="show=!show"/>
		<div class="sidebar" *ngIf="show">
			<ul class="sidebar-menu" >
				<li  *ngFor="let icon of icons">
					<button (click)="onClick(icon.name)" ><img id="{{icon.name}}" src="{{icon.src}}"  alt={{icon.name}} /></button>
				</li>
				<div><img src ="./assets/img/icons/filter.png" class="sidebar-icon" (click)="show=!show"/> </div>

			</ul>
		</div>
		`,
		styleUrls: ['./sidebar.component.css'],
		outputs:['sidebarChanged']
})
export class SidebarComponent{
	private show=false;
	private currentValue="";
	public icons = [
		{ src: "../assets/img/icons/hat-icon.png", name:"hat"},
		{ src: "../assets/img/icons/shirt-icon.png", name:"shirt"},
		{ src: "../assets/img/icons/pants-icon.png", name:"pants"},
		{ src: "../assets/img/icons/shoes-icon.png", name:"shoe"},
		{ src: "../assets/img/icons/bag-icon.png", name:"bag"}
	];

	sidebarChanged = new EventEmitter<string>();
	onClick(value:string){
		if(this.currentValue!=value){
			this.currentValue=value;
			this.sidebarChanged.emit(value);
		}
		else{
			this.currentValue="";
			this.sidebarChanged.emit("");
		}
	}
}
