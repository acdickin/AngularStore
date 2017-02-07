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
  
  constructor(private collectableService: CollectableService) { }

  ngOnInit() {
  	this.collectedItems= this.collectableService.getCollection();
  }
}
