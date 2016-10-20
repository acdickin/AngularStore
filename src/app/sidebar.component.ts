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
					<div class={{icon.type}}></div>
				</li>
			</ul>
		</div>
		`,
		styleUrls: ['./sidebar.component.css'] 
})
export class SidebarComponent{
	show=false;
	public icons = [
	{ type:"hats"},
	{ type:"shirts"},
	{ type:"pants"},
	{ type:"shoes"},
	{ type:"bag"}
	];
}
