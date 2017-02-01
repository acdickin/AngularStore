import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
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
    inStock: 2,
    gender:"male"
    },
    {
    id : 2,
    name: "Shirt2",
    type:"shirt",
    description: "This is another shirt",
    inStock: 8,
    gender:"female"
    },
    {
    id : 3,
    name: "pants",
    type:"pants",
    description: "you Wear them on your legs",
    inStock: 5,
    gender:"female"
    },
    {
    id : 4,
    name : "pants2",
    type:"pants",
    description : "cover them gams",
    inStock : 6,
    gender:"male"
    },
    {
    id : 5,
    name: "hat",
    type:"hat",
    description: "on your head",
    inStock: 5,
    gender:"female"
    },
    {
    id : 6,
    name : "hat2",
    type:"hat",
    description : "covers your noggin",
    inStock : 6,
    gender:"male"
    },
    {
    id : 7,
    name: "shoe",
    type:"shoe",
    description: "on your feet",
    inStock: 5,
    gender:"male"
    },
    {
    id : 8,
    name : "shoe2",
    type:"shoe",
    description : "wear over your socks",
    inStock : 6,
    gender:"male"
    },
    {
    id : 9,
    name: "bag",
    type:"bag",
    description: "on your back",
    inStock: 5,
    gender:"male"
    },
    {
    id : 10,
    name : "bag2",
    type:"bag",
    description : "use it to carry things",
    inStock : 6,
    gender:"female"
    }

  ];

  selectedItem(item){
    this.recentItem = item.name;
    this.cart.push(item.name);
    alert(this.amount +" of "+item.name +' was added to cart');
  }
  changeAmount(num){
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