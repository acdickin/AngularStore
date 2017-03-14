import { Collectable } from "./collectable.model";
export class CollectableService{
	private collectables: Collectable[]=[
		{ id : 1, name: "Shirt",img: "shirt1.jpg", type:"shirt", description: "This is a shirt", inStock: 2, color:'black', cost:25, inCart:1 },
    { id : 2, name: "Shirt2",img: "shirt2.jpg", type:"shirt", description: "This is another shirt", inStock: 8, color:'black', cost:25, inCart:1 },
    { id : 3, name: "pants",img: "pant1.jpg", type:"pants", description: "you Wear them on your legs", inStock: 5, color:'black', cost:25, inCart:1  },
    { id : 4, name: "pants2",img: "pant2.jpg", type:"pants", description : "cover them gams", inStock : 6, color:'black', cost:25, inCart:1  },
    { id : 5, name: "hat",img: "hat1.jpg", type:"hat", description: "on your head", inStock: 5, color:'black', cost:25, inCart:1   },
    { id : 6, name: "hat2",img: "hat2.jpg", type:"hat", description : "covers your noggin", inStock : 6, color:'black', cost:25, inCart:1 },
    { id : 7, name: "shoe",img: "shoe1.jpg", type:"shoe", description: "on your feet", inStock: 5, color:'black', cost:25, inCart:1 },
    { id : 8, name : "shoe2",img: "shoe2.jpg", type:"shoe", description : "wear over your socks", inStock : 6, color:'black', cost:25, inCart:1 },
    { id : 9, name: "bag",img: "bag1.jpg", type:"bag", description: "on your back", inStock: 5, color:'black', cost:25, inCart:1 },
    { id : 10, name: "bag2",img: "bag2.jpg", type:"bag", description : "use it to carry things", inStock : 6, color:'black', cost:25, inCart:1 }
	];

	private collection : Collectable[]=[];

	getCollectables(){
		return this.collectables;
	}
	getCollection(){
		return this.collection;
	}
	addToCollection(item:Collectable){
		let index = this.collection.indexOf(item);
		if (this.collection.indexOf(item)!==-1){
			this.collection[index].inCart++;
			return;
		}
		this.collection.push(item);
	}
	removeFromCollection(item: Collectable){
		let index = this.collection.indexOf(item);
		this.collection[index].inCart--;
		if (this.collection[index].inCart==0){
			this.collection.splice(this.collection.indexOf(item),1);
	  }
	}
	updateCollection(item: Collectable, value){
		let index = this.collection.indexOf(item);
		console.log(value);
		if(value==0){
			this.collection.splice(this.collection.indexOf(item),1);
		}
		else if(this.collection[index].inCart !== value){
		this.collection[index].inCart = value;
		}
		console.log("i should have updated");
	}
}
