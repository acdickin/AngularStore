import { Component, OnInit } from '@angular/core';

import { CollectableService } from "../shared/collectable.service";
import { Collectable }  from "../shared/collectable.model";

@Component({
  selector: 'ad-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

export class ShopComponent implements OnInit {
  collectables: Collectable[] = [];
    
  onAddToCollection(item: Collectable){
    this.collectableService.addToCollection(item);     
  }
  constructor(private collectableService: CollectableService){}
  
  ngOnInit() {
    this.collectables =this.collectableService.getCollectables();
    // this.sidebarValue='';
    // this.amount=1;
    // for(var i=1;i<=25 ;i++){
    //   this.numbers.push(i);
    // }
  }
}