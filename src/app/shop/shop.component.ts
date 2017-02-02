import { Component, OnInit } from '@angular/core';

import { CollectableService } from "../shared/collectable.service"

@Component({
  selector: 'ad-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

export class ShopComponent implements OnInit {
    collectables =[];
    onAddToCollection(){
        alert("Hello")
    }
constructor(private collectableService: CollectableService){}

  

  // selectedItem(item){
  //   this.recentItem = item.name;
  //   this.cart.push(item.name);
  //   alert(this.amount +" of "+item.name +' was added to cart');
  // }
  // changeAmount(num){
  //   console.log(num);
  //   this.amount=num;
  // }
  ngOnInit() {
    this.collectables =this.collectableService.getCollectables();
    // this.sidebarValue='';
    // this.amount=1;
    // for(var i=1;i<=25 ;i++){
    //   this.numbers.push(i);
    // }
  }
}