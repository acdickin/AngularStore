export class Collectable{
	public id : number;
  public name: string;
  public img : string;
  public type: string;
  public description: string;
  public inStock:number;
  public color: string;
  public cost: number;
  public inCart: number;
  
  constructor (id:number, name:string, img : string, type:string, description:string, inStock:number, color:string, cost:number, inCart:number){
		this.id=id;
		this.name=name;
		this.img=img;
		this.type=type;
		this.description=description;		
		this.inStock=inStock;
		this.color=color;
		this.cost= cost;
		this.inCart=inCart;
	} 
};