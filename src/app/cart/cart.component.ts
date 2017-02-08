import { Component, OnInit } from '@angular/core';

import { CollectableService } from "../shared/collectable.service";
import { Collectable }  from "../shared/collectable.model";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  collectedItems: Collectable[] = [];
	
	onRemoveFromCollection(item: Collectable){
		this.collectableService.removeFromCollection(item);
	}
  
  getTotal(){
    console.log(this.collectedItems);
    let total=0;
    for( let i=0; i< this.collectedItems.length; i++){
      total = total+ this.collectedItems[i].inCart*this.collectedItems[i].cost;
      console.log(total);
    }
    return total;
  }
  
  constructor(private collectableService: CollectableService) { }

  ngOnInit() {
  	this.collectedItems= this.collectableService.getCollection();
  }
}
