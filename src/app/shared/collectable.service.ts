import { Collectable } from "./collectable.model";
export class CollectableService{
	private collectables: Collectable[]=[
	];
	getCollectables(){
		return this.collectables;
	}
}