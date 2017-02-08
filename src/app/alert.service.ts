import { Component, OnInit } from '@angular/core';
 
import { AlertService } from '../_services/index';
@component({
		moduleId:module.id,
		selector:'alert',
		templateUrl:'alert.component.html'
})

export class AlertService {
	message:any;

  constructor(private alertService:AlertService) { }

  ngOnInit(){
  	this.alertService.getMessage().subscribe(message=>{this.message=message})
  }
}
