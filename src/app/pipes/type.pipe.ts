import { Pipe } from '@angular/core';

@Pipe({
	name:'TypePipe'
})

export class TypePipe{
  transform(items:any[], args:string):any[] {
    if(args===undefined || args==""){
      return items;
    }
    return items.filter(function(item){
       return (item.type==args);
    });
  }
}
