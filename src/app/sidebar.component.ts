import { Component } from '@angular/core';

@Component({
  selector: 'ad-sidebar',
  template: `
  		<img src ="img/arrow1-icon.png" class="sidebar-arrow"/>
		
		<div class="sidebar">
			<ul class="sidebar-menu" >
		
				<li><div class="sidebar-arrow2"></div></li>
				<li><h4>Menu</h4></li>
				<li  *ngFor="let icon of icons">
					<img class="icons" src={{icon.type}} alt={{icon.name}}/>
				</li>
			</ul>
		</div>
		`,
		styleUrls: ['./sidebar.component.css'] 
})
export class SidebarComponent{
	show=false;
	public icons = [
	{ type:"/images/hats.png", name:"hats"},
	{ type:"/images/shirts.png", name:"shirts"},
	{ type:"/images/pants.png", name:"pants"},
	{ type:"/images/shoes.png", name:"shoes"},
	{ type:"/images/bag.png", name:"bag"}
	];
}
