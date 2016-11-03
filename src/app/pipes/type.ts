import { Pipe } from '@angular/core';

@Pipe({
	name:'type'
})

export class TypePipe{
	 transform(items:any[], args:string[]):any[] {
		if (typeof items === 'object') {
            var resultArray = [];
            if (args.length === 0) {
                resultArray = items;
            }

            else {
                for (let item of items) {
                    if (item.name != null && item.name.match(new RegExp(''+args, 'i'))) {
                        resultArray.push(item);
                    }
                }
            }
			return resultArray;
        }
        else {
            return null;
        }
	}
}
