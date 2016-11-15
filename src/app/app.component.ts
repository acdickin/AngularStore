import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <div id="myMovieList">
    <h3 *ngIf="sidebarValue !=''" >Filter: {{sidebarValue}}</h3>
      <div class="saleCarousel"></div>
      <div id="movieItem" *ngFor="let clothes of clothingList| TypePipe:sidebarValue ">
        <img id="img" src="./assets/img/catstruction.jpg" alt="Under Constuction"/>
        <h2>{{clothes.name}}</h2> 
        <!--<span *ngIf="clothes.inStock < 4"> Only {{clothes.inStock}} left in Stock</span>-->
        <p>{{clothes.description}}</p>
       <select >
         <option  *ngFor="let number of numbers" value="number" >{{number}}</option>
       </select> 
        <button (click)="selectedItem(clothes, amount)">Add Item to Cart</button>
      </div>
    </div>
   
    <ad-sidebar (sidebarChanged)="sidebarValue=$event"></ad-sidebar>   
    
    <h1>Cart:</h1>
      <div *ngFor="let item of cart">{{item}}</div>
  `,
  styleUrls: ['./app.component.css']
 
})

export class AppComponent implements OnInit {
  title = 'Shopping Cart';
  recentItem="None";
  sidebarValue:string;
  cart =[];
  numbers=[];
  amount:number;

  public clothingList = [
    {
    id : 1,
    name: "Shirt",
    type:"shirt",
    description: "This is a shirt",
    inStock: 2
    },
    {
    id : 2,
    name: "Shirt2",
    type:"shirt",
    description: "This is another shirt",
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
    },
    {
    id : 5,
    name: "hat",
    type:"hat",
    description: "on your head",
    inStock: 5
    },
    {
    id : 6,
    name : "hat2",
    type:"hat",
    description : "covers your noggin",
    inStock : 6
    },
    {
    id : 7,
    name: "shoe",
    type:"shoe",
    description: "on your feet",
    inStock: 5
    },
    {
    id : 8,
    name : "shoe2",
    type:"shoe",
    description : "wear over your socks",
    inStock : 6
    },
    {
    id : 9,
    name: "bag",
    type:"bag",
    description: "on your back",
    inStock: 5
    },
    {
    id : 10,
    name : "bag2",
    type:"bag",
    description : "use it to carry things",
    inStock : 6
    }

  ];

  selectedItem(item, number){
    var num =number;
    this.recentItem = item.name;
    this.cart.push(item.name);
    alert( num +" of "+item.name +' was added to cart');
  }
  changeAmount(num):void{
    console.log(num);
    this.amount=num;
  }
  ngOnInit() {
   this.sidebarValue=''
   this.amount=1;
    for(var i=1;i<=25 ;i++){
      this.numbers.push(i);
    }
  }
}