import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <div id="myMovieList">
      <div id="movieItem" *ngFor="let clothes of clothingList" >
        <h2>{{clothes.name}}</h2><span *ngIf="clothes.inStock < 4"> Only {{clothes.inStock}} left in Stock</span>
        <p>{{clothes.description}}</p>
        <button (click)="selectedItem(clothes)">Add Item to Cart</button>
        
      </div>
    </div>
   
    <ad-sidebar (sidebarChanged)="sidebarValue=$event"></ad-sidebar>   
    <h2>{{sidebarValue}}</h2>
    <h1>Cart:</h1>
      <div *ngFor="let item of cart">{{item}}</div>
  `,
  styleUrls: ['./app.component.css'] 
})

export class AppComponent {
  title = 'Shopping Cart';
  recentItem="None";
  sidebarValue:string;
  cart =[];
  public clothingList = [
    {
    id : 1,
    name: "Shirt",
    type:"shirt",
    description: "THis is a shirt",
    inStock: 2
    },
    {
    id : 2,
    name: "Shirt2",
    type:"shirt",
    description: "THis is another shirt",
    inStock: 8
    },
    {
    id : 3,
    name: "pants",
    type:"pants",
    description: "you Wear them on your legs",
    inStock: 5
    },
    {
    id : 4,
    name : "pants2",
    type:"pants",
    description : "cover them gams",
    inStock : 6
    }
  ];
  selectedItem(item){
    this.recentItem = item.name;
    this.cart.push(item.name);
    alert(item.name +' was added to cart');
  }

}
