export class Collectable{
	public id : number;
  public name: string;
  public type: string;
  public description: string;
  public inStock:number;
  public color: string;
  public amount: number;
  public gender:string;
  constructor (id:number, name:string, type:string, description:string, inStock:number, color:string, amount:number, gender:string){
				this.id=id;
				this.name=name;
				this.type=type;
				this.description=description;		
				this.inStock=inStock;
				this.color=color;
				this.amount= amount;
				this.gender=gender;
		} 
};